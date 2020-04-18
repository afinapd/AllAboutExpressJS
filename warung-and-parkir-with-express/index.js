const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./dbConn');

const appMiddleware = require('./middlewares/app.middlewares');
const appRoutes = require('./routes/index');

dotenv.config();
if (process.env.APP_NAME) {
    app.use(appMiddleware);
    app.use(appRoutes);

    app.listen(process.env.APP_PORT, '0.0.0.0');
    console.log(`Server started on port ${process.env.APP_PORT} press Ctrl-C to terminate....`);
} else {
    process.exit(1);
}