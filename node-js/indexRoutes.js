var http=require('http');
var fs=require('fs');
const requestHandler = require('./routes');
const server = http.createServer(requestHandler);
server.listen(3000,'0.0.0.0');

console.log('server started on port 3000'+'press ctrl-c to terminate');