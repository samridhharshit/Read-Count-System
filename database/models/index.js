const dbConfig = require('../config')
const Sequelize = require('sequelize')

module.exports = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    operatorsAliases: false
})

// db.container = require("./container/model")(sequelize, Sequelize)