const express = require("express");
const authLogic = require("../business-logic-layer/auth-logic");
const errorsHelper = require("../helpers/errors-helper");
const verifyLoggedIn = require('../middleware/verify-logged-in')
const generateNewToken = require('../helpers/jwt-helper')
const logs = require('../middleware/logs')
const router = express.Router();


// http://localhost:4000/auth/login
router.post('/login', logs.loginLog, async (req, res) => {
    try {
        const user = await authLogic.loginAsync(req.body)

        const newToken = generateNewToken.getNewToken(user)

        const data = {
            ...user._doc,
            token: newToken
        }

        res.json(data)
    }
    catch (err) {
        res.status(500).send(errorsHelper.getError(err));

    }
})



module.exports = router;