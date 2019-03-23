const path = require('path');
const helmet = require('helmet');
const express = require('express');
const cookieParser = require('cookie-parser');

const log = require('./middlewares/log');
// const db = require('./config/database');
const routes = require('./config/routes');
const cors = require('./middlewares/cors');
const sass = require('./middlewares/sass');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(log);
app.use(cors);
app.use(sass);
app.use(helmet());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);
app.use(errorHandler);

module.exports = app;
