const express = require("express");
const personsLogic = require("../business-logic-layer/persons-logic"); // logic
// const verifyLoggedIn = require('../middleware/verify-logged-in')

//helpers
const errorsHelper = require("../helpers/errors-helper");

const router = express.Router();

// http://localhost:4000/persons/all-persons
router.get('/all-persons', async (req, res) => {
    try {
        const persons = await personsLogic.getAllPersonsForUserAsync()
        res.json(persons)
    }
    catch (err) {
        res.status(500).send(errorsHelper.getError(err));
    }
})

module.exports = router;