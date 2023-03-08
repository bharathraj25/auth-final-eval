module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5433
  },
  docker: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
};
