const mongoose = require("mongoose");

// Creating user schema: 
const UserSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "Missing email."],
    },
    first_name: {
        type: String,
        required: [true, "Missing first name."],
    },
    last_name: {
        type: String,
        required: [true, 'Missing last name']
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    from: String,
    signed_up_time: {
        type: Date,
        default: new Date()
    },
    image: String,
    id: String
},
    {
        versionKey: false, // versionKey: false --> don't add __v property to each object
        toJSON: { virtuals: true }, // Allow virtual fields.
        id: false
    });


// Creating user model: 
const UserModel = mongoose.model("UserModel", UserSchema, "users"); // class name, schema, collection

module.exports = UserModel;

