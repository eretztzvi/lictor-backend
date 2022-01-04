const mongoose = require("mongoose");

// Creating user schema: 
const LikeSchema = mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    email: String,
    like_name: String,
    like_id: String,
    person_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PersonModel"
    },
    is_liked: Boolean,
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
const LikeModel = mongoose.model("LikeModel", LikeSchema, "likes"); // class name, schema, collection

module.exports = LikeModel;

