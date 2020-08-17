const db = require("../models");
const Location = db.location;

// Create and Save a new Location
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "The object is empty!",
        });
        return;
    }

    // Create a Location
    const location = {
        name: req.body.name,
        area_m2: req.body.area_m2,
        parentId: req.body.parentId
    };

    // Save Location in the database
    Location.create(location)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            let message = "An error has occurred retrieving Locations.";
            res.status(500).send({
                message:
                    err.message || message,
            });
        });
};

// Retrieve all Locations from the database.
exports.findAll = (req, res) => {
    Location.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            let message = "An error has occurred retrieving Locations.";
            res.status(500).send({
                message:
                    err.message || message
            });
        });
};
