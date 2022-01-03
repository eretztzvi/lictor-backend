const crypto = require("crypto");

// SHA: Secure Hashing Algorithm
// HMAC: Hash based Message Authentication Code
// MD5: Message Digest Algorithm version 5

const salt = "MakeThingsGoRight";

function hash(plainText) {

    // Hashing without salt: 
    // return crypto.createHash("sha512").update(plainText).digest("hex");

    // Hashing with salt:
    return crypto.createHmac("sha512", salt).update(plainText).digest("hex");
}

module.exports = {
    hash
};