const EventEmitter =require('events');
const myEmitter = new EventEmitter();
const fs=require("fs");

myEmitter.on('user-registration',(user)=>{
    fs.writeFile('user.txt',JSON.stringify(user),()=>{
        console.log(user);
    })
})

const userRegistration=(user)=>{
    myEmitter.emit('user-registration',user);
};

userRegistration({
    username:'dewa',
    password:'rahasia',
    address:'rawamangun'
});