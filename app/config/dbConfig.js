require('dotenv').config()

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DATABASE_NAME,
    dialect: process.env.DBMS,
  };