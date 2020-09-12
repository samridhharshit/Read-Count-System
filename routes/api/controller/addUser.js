const User = require('../../../database/models/container/User')
const PasswordCheck = require('../controller/encryptDecryptPassword')

const AddUser = async (userBody) => {
    if (!userBody) {
        return {
            success: false,
            message: 'Please provide valid data or No Data provided'
        }
    }

    // Create a User
    const data = {
        firstName: userBody.firstName,
        lastName: userBody.lastName,
        email: userBody.email,
        password: PasswordCheck.getHashPassword(userBody.password),
        username: userBody.firstName + userBody.lastName
    };

    // Save Tutorial in the database
    const result = await User.create(data)
    if (result) {
        const msg = {
            success: true,
            data: result
        }
        console.log(result)
        return msg
    }
}
module.exports = AddUser