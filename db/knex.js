var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile');
var knex = require('knex')(config[environment]);

module.exports = knex;
