const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Hi</title><head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form></body>');
    res.write('<ul><li>dummy username</li></ul>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title><head>');
    res.write('<ul><li>dummy username</li></ul>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const buffer = [];
    req.on('data', chunk => {
      console.log(chunk);
      buffer.push(chunk);
    });
    return req.on('end', () => {
      const parsedUsername = Buffer.concat(buffer).toString();
      const username = parsedUsername.split('=')[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
