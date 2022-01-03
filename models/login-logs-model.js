const mongoose = require("mongoose");

// Creating user schema: 
const LoginLogsSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "Missing email."],
    },
    last_name: {
        type: String,
        required: [true, 'Missing last name']
    },
    first_name: {
        type: String,
        required: [true, 'Missing last name']
    },
    log_time:{
        type: Date,
        default: new Date()
    }
},
    {
        versionKey: false, // versionKey: false --> don't add __v property to each object
        toJSON: { virtuals: true }, // Allow virtual fields.
        id: false
    });


// Creating user model: 
const LoginLogsModel = mongoose.model("LoginLogsModel", LoginLogsSchema, "login_logs"); // class name, schema, collection

module.exports = LoginLogsModel;

