try {
  require('dotenv').load();
} catch(error) {
  console.error(error);
}

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cw_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 8
    },
    ssl: true
  }
};
