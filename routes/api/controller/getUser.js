const User = require('../../../database/models/container/User')// model import

const getUser = async (id) => {

    const user = await User.findOne({where: { id }})

    if (user !== null) {
        return {
            success: true,
            data: user
        }
    } else {
        return {
            success: false,
            message: 'User does not exist or trying to access a non-existing user.'
        }
    }
}

module.exports = getUser
