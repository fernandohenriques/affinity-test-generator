const logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const mode = process.env.NODE_ENV !== 'production' ? 'dev' : 'combined';

module.exports = logger(mode);
