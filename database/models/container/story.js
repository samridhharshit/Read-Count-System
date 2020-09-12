const Sequelize = require('sequelize')
const db = require('../index')

const Story = db.define("stories", {
    title: {
        type: Sequelize.STRING
    },
    text: {
        type: Sequelize.STRING
    }
});

module.exports = Story