//let result= require('./main.js');

//const b=5;
//const c= result.largeNumber + b;
//console.log(`The sume is ${c}`);

//Part2
const http=require('http');
const port =3000;

const server =http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><p>My Module is<br>361<br><h1>Hi there at the frontend</h1></p></body></html>`);
});

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error);
    } else {
        console.log('I am listening..');
    }
})