const express = require('express');
const router = express.Router();
const addActivity = require("../controllers/addActivity");
const getAllActivities = require("../controllers/getActivites");
router.post("/addActivity", addActivity);
router.get("/getActivites", getAllActivities);

module.exports = router;