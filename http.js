const http = require('http');

// console.log(http.STATUS_CODES);
const server = http.createServer((req, res) => {
    const {url} = req;
    if(url === '/' && method === 'GET'){
        res.writeHead(200, {'Content-Type': "text/plain"});
        res.end("Hello world!");
        console.log(req);
    }
})
server.listen(5000);