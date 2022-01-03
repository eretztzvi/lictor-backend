const express = require("express");
// const guardsLogic = require("../business-logic-layer/guards-logic"); // logic
// const verifyLoggedIn = require('../middleware/verify-logged-in')

//helpers
const errorsHelper = require("../helpers/errors-helper");

const router = express.Router();

// http://localhost:4000/projects/by-branch/6107dd01839fa3ef716d41f1
// router.get('/by-branch/:_id', async (req, res) => {
//     try {
//         const _id = req.params._id
//         const projects = await projectsLogic.getAllProjectsByBranchAsync(_id)
//         res.json(projects)
//     }
//     catch (err) {
//         res.status(500).send(errorsHelper.getError(err));
//     }
// })

module.exports = router;