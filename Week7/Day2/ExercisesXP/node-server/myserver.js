//Exercise1
const http =require('http');
const server=http.createServer((request, response)=>{
   response.setHeader('Content-Type', 'text/html');
   response.end('<h1>This is my first response</h1><br><h1>This is my second responde</h1><br><h4>This is my third response</h4>');
})

server.listen(3000);
