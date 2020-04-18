const express = require('express');
const path=require('path');
const fs=require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'users.json'));
})

app.post('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'users.json'));
    let dataMasuk = req.body
    fs.readFile('users.json', (data)=>{
        data=JSON.parse(data)
        data=JSON.stringify(data)
        data.push(dataMasuk)
        // return res.json(dataMasuk)
        fs.writeFile('users.json',data,()=>{
            console.log('kelar')
            res.statusCode = 302;
            res.write(JSON.stringify(dataMasuk))
            return res.send("");
        })
    });
})

app.put('/:id',(req, res,next)=>{
    fs.readFile('users.json',(err,data)=>{
        data = JSON.parse(data)
        console.log(data)
        for(let i=0;i<data.length;i++){
            if(data[i].id===parseInt(req.params.id)){
                data[i].name = req.body.name
                data[i].username=req.body.username
                data[i].email=req.body.email
                fs.writeFile('users.json',JSON.stringify(data,null,4),(err)=>{
                    if (err) console.log(err)
                    res.statusCode = 302;
                    // res.send("OK")
                })
            }
        }
        
    })
    res.send("okee")
})

app.delete('/:id',(req,res,next)=>{
    fs.readFile('users.json',(err,data)=>{
        data=JSON.parse(data)
        for(let i=0;i<data.length;i++){
            if(data[i].id===parseInt(req.params.id)){
                data.splice(i,1)
                
                fs.writeFile('users.json',JSON.stringify(data,null,4),(err)=>{

                })
            }
        }
    })
    res.send("okeewoi")
})


app.listen(2000, '0.0.0.0')
console.log('server started on port 3000 ' + 'press ctrl-c to terminate')