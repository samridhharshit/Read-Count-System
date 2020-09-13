const bcrypt = require('bcrypt')
const saltRounds = 10

const getHashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

const compareWithPasswordHash = async (password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = { getHashPassword, compareWithPasswordHash }