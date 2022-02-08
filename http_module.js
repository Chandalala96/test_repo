const http = require('http');

const server = http.createServer((req, res) => {
   
    if(req.url == '/' ) {
        res.end('Hello gang node');
    }
    if(req.url == '/about') {
        res.end('Here is abou us');
    }
    res.end('go back');
})

server.listen(5000); 

