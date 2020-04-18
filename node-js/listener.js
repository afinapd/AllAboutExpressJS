const fs=require("fs");
const myEmitter=require('./myEmitter');

myEmitter.on('user-registration',(user)=>{
    fs.writeFile('user.txt',JSON.stringify(user),()=>{
        console.log(user);
    })
})