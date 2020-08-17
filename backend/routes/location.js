const express = require("express");
const router = express.Router();

const locations = require("../api/locationController.js");

// Create a new Location
router.post("/create", locations.create);

// Retrieve all Locations
router.get("/all", locations.findAll);

module.exports = router;