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
    const user = await User.findOne({
        where: {
            email: body.email
        }
    })

    if (user.length !== 0) {
        if (await PasswordCheck.compareWithPasswordHash(body.password, user[0].password)) {
            return {
                success: true,
                data: user[0]
            }
        }
    }
    return {
        success: false,
        msg: 'Invalid Email Id, Please enter the correct email...'
    }
}

module.exports = VerifyUser