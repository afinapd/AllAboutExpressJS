// const http=require('http');
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const adminRoutes = require('./router/admin')
const shopRoutes = require('./router/shop')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404);
    res.send('unknown page');
});

app.listen(3000, '0.0.0.0')