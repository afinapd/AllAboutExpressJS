var http = require('http');
var fs = require('fs');
let buffer = [fs.readFileSync('users.json')]
let stringBuffer = Buffer.concat(buffer).toString();
// const requestHandler = require('./routes');
http.createServer(function (req, res) {
    const url = req.url
    const method = req.method;

    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        // res.write(stringBuffer);
        // return res.end();

        let json=JSON.parse(fs.readFileSync('users.json'))
        return res.end(JSON.stringify(json))

    } else if (url === '/users' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            // const parsed = Buffer.concat(body).toString();
            // console.log(parsed)
            // let message = parsed.split('=')[0];
            // message = JSON.parse(message)
            // console.log(message)
            // let json = fs.readFileSync("users.json")
            // json = JSON.parse(json);
            // json.push(message);

            // let json=JSON.parse(fs.readFileSync('users.json'))

            // var newData = Buffer.concat(body).toString()
            var dataClient = JSON.parse(body);
            let json = JSON.parse(fs.readFileSync('users.json'));
            json.push(dataClient)
            let data = JSON.stringify(json,null,2)
            // fs.writeFileSync('users.json', JSON.stringify(json), null, 2)
            fs.writeFile('users.json',data,()=>{
                console.log('kelar')
                res.statusCode = 302;
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify(dataClient))
                return res.end();
            })

        });
        return;


    } else if (url === '/users' && method === 'PUT') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            // var newData = Buffer.concat(body).toString()
            var dataClient = JSON.parse(body);
            let json = JSON.parse(fs.readFileSync('users.json'));
            json.forEach(data => {
                if (data.id === dataClient.id) {
                    data.name = dataClient.name,
                    data.username = dataClient.username,
                    data.email = dataClient.email
                }
            });
            fs.writeFileSync('users.json', JSON.stringify(json), null, 2)
            return res.end();

        });
        return;


    } else if (url === '/users' && method === 'DELETE') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            // var newData = Buffer.concat(body).toString()
            var dataClient = JSON.parse(body);
            let json = JSON.parse(fs.readFileSync('users.json'));
            for (let i = 0; i < json.length; i++) {
                if (json[i].id === dataClient.id) {
                    json.splice(i, 1);
                }
            }
            fs.writeFileSync('users.json', JSON.stringify(json), null, 4)
            return res.end();

        });
        return;
    }
}).listen(3001, '0.0.0.0');
