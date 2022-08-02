const express= require('express');
const app = express ();

app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is an HTML tag</h1>');
});

app.listen(3000);