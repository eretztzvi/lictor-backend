
const LoginLogsModel = require('../models/login-logs-model')


const loginLog = async (req, res, next) => {
    try {

        const newLog = await new LoginLogsModel(req.body)
        newLog.save()

        next()
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    loginLog
}