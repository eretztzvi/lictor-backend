const mongoose = require("mongoose");

// Creating user schema: 
const MessageSchema = mongoose.Schema({

    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    sender: String,
    sender_fullname: String,
    title: String,
    message: String,
    person_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PersonModel"
    },
    is_sent: Boolean,
    start_time: {
        type: Date,
        default: new Date()
    },
},
    {
        versionKey: false, // versionKey: false --> don't add __v property to each object
        toJSON: { virtuals: true }, // Allow virtual fields.
        id: false
    });


// Creating user model: 
const MessageModel = mongoose.model("MessageModel", MessageSchema, "messages"); // class name, schema, collection

module.exports = MessageModel;

