const bcrypt = require('bcrypt')
const saltRounds = 20

const getHashPassword = async (password) => {
    return await bcrypt.hashSync(password, saltRounds);
}

const compareWithPasswordHash = async (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = { getHashPassword, compareWithPasswordHash }