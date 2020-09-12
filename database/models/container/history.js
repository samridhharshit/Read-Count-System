const Sequelize = require('sequelize')
const db = require('../index')

const History = db.define("history", {
    userId: {
        type: Sequelize.BIGINT
    },
    storyId: {
        type: Sequelize.BIGINT
    }
});

module.exports = History