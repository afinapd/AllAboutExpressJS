// Javascript File Ops
// fs seharusnya folder
var fs = require("fs");
var message = 'dewa';

fs.writeFile('input.txt', message, () => {
    console.log(message);
});

console.log('this printes 1st');
fs.readFile('input.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("program ended");