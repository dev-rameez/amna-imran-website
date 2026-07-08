import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the built server handler
const serverModule = await import(join(__dirname, 'dist/server/server.js'));
const handler = serverModule.default;

const PORT = process.env.PORT || 3000;
const STATIC_DIR = join(__dirname, 'dist/client');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

function serveStatic(filePath, res) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);
    
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content);
    return true;
  } catch (error) {
    return false;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    // Try to serve static files first
    if (req.url.startsWith('/assets/')) {
      const assetPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = join(STATIC_DIR, assetPath);
      if (serveStatic(filePath, res)) {
        return;
      }
    }

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

