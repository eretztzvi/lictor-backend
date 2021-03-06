const express = require("express");
const likesLogic = require("../business-logic-layer/likes-logic"); // logic
// const verifyLoggedIn = require('../middleware/verify-logged-in')

//helpers
const errorsHelper = require("../helpers/errors-helper");

const router = express.Router();

// http://localhost:4000/likes/add-like/
router.post('/add-like/', async (req, res) => {
    try {
        const addedLike = await likesLogic.addUserLikeAsync(req.body)
        res.status(201).json(addedLike)
    }
    catch (err) {
        res.status(500).send(errorsHelper.getError(err));
    }
})

// http://localhost:4000/likes/by-user/:_id
router.get('/by-user/:_id', async (req, res) => {
    try {
        const _id = req.params._id
        const userLikes = await likesLogic.getAllUserLikesByIdAsync(_id)
        res.json(userLikes)
    }
    catch (err) {
        res.status(500).send(errorsHelper.getError(err));
    }
})

module.exports = router;