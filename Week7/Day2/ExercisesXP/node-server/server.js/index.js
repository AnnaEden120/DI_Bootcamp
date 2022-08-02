//Exercise2
const express= require ('express');
const app= express ();

app.get('/', (req, res)=>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    } 
    res.send(user);
});

app.listen(8080);