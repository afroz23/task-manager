require('dotenv').config();

const { MONGO_URI, CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = { MONGO_URI, CLIENT_ID, CLIENT_SECRET };
