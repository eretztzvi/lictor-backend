require("../data-access-layer/dal");
const LikesModel = require('../models/likes-model')

const getAllUserLikesByIdAsync = async _id => {
    try {
        const userLikes = await LikesModel.find({ user_id: _id }).exec()
        return userLikes
    }
    catch (err) {
        console.log(err);
        return err.message
    }
}

const addUserLikeAsync = async like => {
    try {

        // 1. get all likes where user email and person id and 
        const alreadyLikedPerson = await LikesModel.findOne({ email: like.email, person_id: like.person_id }).exec()

        if (alreadyLikedPerson) {
            if (alreadyLikedPerson.like_name === like.like_name) {
                await LikesModel.deleteOne({ email: like.email, person_id: like.person_id }).exec()
                return "removed like"
            }
            await LikesModel.deleteOne({ email: like.email, person_id: like.person_id }).exec()
        }

        const userLikes = await new LikesModel(like)
        return userLikes.save()
    }
    catch (err) {
        console.log(err);
        return err.message
    }
}

module.exports = {
    getAllUserLikesByIdAsync,
    addUserLikeAsync
}