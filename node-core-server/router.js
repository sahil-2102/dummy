import fs from 'fs';
import url from 'url';
function router(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Route: /
  if (pathname === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node Server!');
  }

  // Route: /about
  else if (pathname === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is the about page.' }));
  }

  // Route: /hello?name=Alex
  else if (pathname === '/hello' && method === 'GET') {
    const name = parsedUrl.query.name || 'Guest';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
  }

  // Route: /time
  else if (pathname === '/time' && method === 'GET') {
    const time = new Date().toISOString();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ time }));
  }

  // Route: /home → Serve home.html
  else if (pathname === '/home' && method === 'GET') {
    fs.readFile('./home.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } 
  else if (pathname === '/data' && method === 'POST'){
    let body = '';
    req.on('data', chunks => {
        body += chunks.toString();
    });
    req.on('end', () => {
        try {
      const parsedBody = JSON.parse(body);
      const name = parsedBody.name || 'Anonymous';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello ${name}!`);
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON body' }));
    }
    })
  }

  // 404 fallback
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
}

export default router;