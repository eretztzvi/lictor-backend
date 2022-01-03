const mongoose = require("mongoose");
require('dotenv').config();

function connectAsync() {
    return new Promise((resolve, reject) => {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(config.mongodb.connectionString, options, (err, db) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(db);
        });
    });
}

(async () => {
    try {
        await connectAsync();
    }
    catch (err) {
        console.log(err);
    }
})();
