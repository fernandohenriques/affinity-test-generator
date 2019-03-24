const path = require('path');
const Nedb = require('nedb');

const databasePath = `${path.join(__dirname, '../database')}database.db`;
const db = new Nedb({ filename: databasePath, autoload: true });

module.exports = db;
