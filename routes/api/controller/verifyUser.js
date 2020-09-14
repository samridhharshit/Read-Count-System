const User = require('../../../database/models/container/User')
const PasswordCheck = require('../controller/encryptDecryptPassword')

const VerifyUser = async (body) => {
    if (!body) {
        return {
            success: false,
            message: 'Please provide valid data or No Data provided'
        }
    }

//    verify User
    try {
        const user = await User.findOne({
            where: {
                email: body.email
            }
        })
        // console.log(user.password)

        if (user) {
            if (await PasswordCheck.compareWithPasswordHash(body.password, user.password)) {
                const objToReturn = {
                    id: user.id,
                    name: user.firstName
                }
                return {
                    success: true,
                    data: objToReturn
                }
            }
            return {
                success: false,
                message: 'Incorrect password, Please enter the correct password...'
            }
        }
        return {
            success: false,
            message: 'Invalid Email Id, Please enter the correct email...'
        }
    } catch (e) {
        return {
            success: false,
            message: `sql crashed with error message ${e}`
        }
    }

}

module.exports = VerifyUser