const mongoose = require("mongoose");

// Creating user schema: 
const PersonSchema = mongoose.Schema({

    first_name: String,
    last_name: String,
    image: String,
    company: String,
    job: String,
    gender: String,
    phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    note: String,
    area: String,
    address: String,
    approved: Boolean,
    start_time: {
        type: Date,
        default: new Date()
    },
    who_delivered: String
},
    {
        versionKey: false, // versionKey: false --> don't add __v property to each object
        toJSON: { virtuals: true }, // Allow virtual fields.
        id: false
    });


// Creating user model: 
const PersonModel = mongoose.model("PersonModel", PersonSchema, "persons"); // class name, schema, collection

module.exports = PersonModel;

