/**
 * Node.js HTTP server entry point for Railway deployment.
 *
 * TanStack Start with @cloudflare/vite-plugin produces dist/server/server.js
 * as a Cloudflare Workers module (exports a { fetch } handler). This file
 * wraps that handler in a standard Node.js HTTP server so the app can run
 * on Railway without Cloudflare Workers infrastructure.
 */

import http from "node:http";

// Dynamically import the built Cloudflare Workers module.
// At runtime this file lives at dist/node-server.js, so the server
// module is at dist/server/server.js — one directory down.
const serverModule = await import("./server/server.js");
const handler = serverModule.default as {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer(async (req, res) => {
  try {
    // Build the full URL from the incoming request.
    const protocol = "http";
    const host = req.headers.host ?? `localhost:${PORT}`;
    const url = `${protocol}://${host}${req.url ?? "/"}`;

    // Collect the request body.
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk as Buffer);
    }
    const body = chunks.length > 0 ? Buffer.concat(chunks) : null;

    // Convert Node.js IncomingMessage headers to a plain object for the
    // Web Fetch API Headers constructor.
    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        headers[key] = Array.isArray(value) ? value.join(", ") : value;
      }
    }

    // Create a Web API Request.
    const request = new Request(url, {
      method: req.method ?? "GET",
      headers,
      body: body && body.length > 0 ? body : undefined,
      // @ts-expect-error — Node 18+ supports duplex on Request
      duplex: "half",
    });

    // Invoke the Cloudflare Workers fetch handler.
    // Pass empty env and a no-op execution context.
    const response = await handler.fetch(request, {}, { waitUntil: () => {}, passThroughOnException: () => {} });

    // Write the response status and headers.
    const responseHeaders: Record<string, string | string[]> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });
    res.writeHead(response.status, responseHeaders);

    // Stream the response body.
    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }

    res.end();
  } catch (err) {
    console.error("Unhandled server error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "text/plain" });
    }
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
