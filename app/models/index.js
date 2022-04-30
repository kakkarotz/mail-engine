const dbConfig = require('../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.EmailDeployment = require('./mailModel/EmailDeployment.model')(sequelize, DataTypes);
db.Contact = require('./mailModel/Contact.model')(sequelize, DataTypes);
module.exports = db;

checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()