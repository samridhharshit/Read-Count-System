const User = require('../../../database/models/container/User')
const PasswordCheck = require('../controller/encryptDecryptPassword')

const AddUser = async (userBody) => {
    console.log(userBody)
    if (!userBody) {
        return {
            success: false,
            message: 'Please provide valid data or No Data provided'
        }
    }

    // Create a User
    const data = {
        firstName: userBody.fName,
        lastName: userBody.lName,
        email: userBody.email,
        password: await PasswordCheck.getHashPassword(userBody.password),
        username: userBody.fName + userBody.lName
    };

    // Save Tutorial in the database
    const result = await User.create(data)
    console.log(result.id)
    if (result) {
        return {
            success: true,
            data: {
                id: result.id,
                name: result.firstName
            }
        }
    }
}
module.exports = AddUser