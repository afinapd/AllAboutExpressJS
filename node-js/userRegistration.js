const myEmitter = require('./myEmitter');
require('./listener');

const userRegistration=(user)=>{
    myEmitter.emit('user-registration',user);
};
module.exports=userRegistration;