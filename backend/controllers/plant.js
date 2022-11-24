const Plant = require('../models/plants');

exports.createPlant = (req, res, next) => {
    const plant = new Plant({
        ...req.body.plant,
        userId: req.auth.userId,
    });
    plant.save()
        .then(() => {
            res.status(201).json({
                message: "Plant saved successfully",
                body: plant,
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        });
};

exports.getOnePlant = (req, res, next) => {
    Plant.findOne({ _id: req.params.id })
        .then((plant) => {
            res.status(200).json(plant);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.getAllPlant = (req, res, next) => {
    Plant.find()
        .then((plant) => {
            res.status(200).json(plant);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};