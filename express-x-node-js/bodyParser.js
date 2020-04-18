const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    res.send(`
    <html>
    <body>
        <form action="/product" method="/post">
        <input type="text" name="title">
        <input type="submit">
        </form>
    </body>
    </html>
    `)
})
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.listen(3000, '0.0.0.0')