require("../data-access-layer/dal");
const cryptoHelper = require('../helpers/crypto-helper')
const UserModel = require('../models/users-model')
const LoginLogsModel = require('../models/login-logs-model')

const loginAsync = async user => {
    try {
        const isUser = await UserModel.findOne({ email: user.email }).exec()

        let newUser = null

        if (!isUser) {
            newUser = await new UserModel(user)
            return newUser.save()
        }

        return isUser
    }
    catch (err) {
        console.log(err);
        return err.message
    }
}



module.exports = {
    loginAsync
}