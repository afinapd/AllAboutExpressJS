const express=require('express');
const app=express();

app.use((req,res,next)=>{
    req.requestTime = Date.now()
    console.log('middleware 1');
    next();
});

app.use((req,res,next)=>{
    // send a response 
    // res.setheader('content-type','text/html')
    console.log('middleware 2');
    res.send('<h1>Hello</h1>')
});

app.listen(30000,'0.0.0.0')

console.log('server started on port 3000 '+'press ctrl-c to terminate')