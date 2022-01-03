const jwt = require("jsonwebtoken");

const key = "GunsCoffeeAndPens";

function getNewToken(payload) {
    return jwt.sign({ payload }, key, { expiresIn: '1y' });
}

module.exports = {
    getNewToken
};
