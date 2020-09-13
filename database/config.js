module.exports = {
    HOST: "sql12.freesqldatabase.com" || process.env.HOST,
    USER: "sql12365188" || process.env.USER,
    PASSWORD: "5iSkh3RGx8" || process.env.PASSWORD,
    DB: "sql12365188" || process.env.DB,
    dialect:"mysql",
    pool: {// It is optional and is deployed in the Sequelize connection pool config.
        max: 5,// maximum number of connections permissible in a pool
        min:0,// minimum number of connections permissible in a pool
        acquire: 30000,// maximum time, in terms of milliseconds, that the pool seeks to make the connection before an error message pops up on screen
        idle: 10000// maximum time, in terms of milliseconds, that a connection can be held idly before being released
    }
}