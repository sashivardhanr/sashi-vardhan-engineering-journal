import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';

// Separate loopback-only server: Astro's preview daemon is shared per workspace.
const root = resolve('.review-dist');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain' };
await stat(resolve(root, 'order-b/index.html')).catch(() => {
  throw new Error('Review output missing. Run npm run build:review first.');
});
const server = createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let path = resolve(root, `.${pathname}`);
    if (path !== root && !path.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(path)).isDirectory()) path = resolve(path, pathname === '/' ? 'order-b/index.html' : 'index.html');
    const content = await readFile(path);
    response.writeHead(200, { 'Content-Type': mime[extname(path)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' }).end('Review file not found.');
  }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(4322, '127.0.0.1', () => console.log('Review: http://127.0.0.1:4322/order-b/ (Ctrl+C to stop)'));
