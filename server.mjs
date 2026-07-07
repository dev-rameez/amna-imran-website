import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the built server handler
const serverModule = await import(join(__dirname, 'dist/server/server.js'));
const handler = serverModule.default;

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    // Convert Node.js request/response to Web API Request/Response
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });

    // Call the handler
    const response = await handler.fetch(request, {}, {});

    // Send response
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

