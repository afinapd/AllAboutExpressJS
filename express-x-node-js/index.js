const http=require('http');
const express=require('express');
const app=express();

// const server=http.createServer(app);
// server.listen(3000,'0.0.0.0');

// console.log('server started on port 3000;' +'press ctrl+c to terminate')


app.use('/',(req,res,next)=>{
    res.send('<h1>Middleware 1</h1>')
    console.log('<h1>Always Run</h1>');
    next();
});

// if we want path /product
app.use('/product',(req,res,next)=>{
    res.send('<h1>Product</h1>')
    console.log("a")
});

// every route start with /
app.use('/',(req,res,next)=>{
    res.send('<h1>Middleware 2</h1>')
    console.log("b")
})




// const server=http.createServer(app)
// server.listen(3000,'0.0.0.0');
app.listen(3000,'0.0.0.0')

console.log('server started on port 3000 '+'press ctrl-c to terminate')