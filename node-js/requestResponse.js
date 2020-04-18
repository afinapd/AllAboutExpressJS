// // Javascript Server
// const http=require('http')
// const server = http.createServer(function(req,res){
//     console.log(req)
// })
// server.listen(3000,'0.0.0.0');
// console.log('server started on port 3000; press ctrl-c to terminate...')

// // Request
// const http=require('http')
// http.createServer(function(req,res){
//     console.log(req.url,req.method,req.headers)
// }).listen(3000,'0.0.0.0');
// console.log('server started on port 3000; press ctrl-c to terminate...')

// Response
// var http = require('http');
// http.createServer(function (req, res) {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('content-type', 'text/html');
//     res.write('<html>');
//     res.write('<body>');
//     res.write('<h1>Hello World</h1>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
// }).listen(3000, '0.0.0.0')
// console.log('server started on port 3000; press ctrl-c to terminate...')

// Resquest Response
var http = require('http');
var fs = require('fs')
http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/message" method="post">');
        res.write('<input type="text" name="message">');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end', () => {
            const parsed = Buffer.concat(body).toString();
            console.log(parsed)
            const message = parsed.split('=')[1];
            fs.writeFile('pesan.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        return;

        // fs.writeFileSync('pesan.txt', 'DDD');
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(3000, '0.0.0.0')
console.log('server started on port 3000; press ctrl-c to terminate...')


