const db = require("../models");
const Provider = db.providers;

// Create and Save a new Provider
exports.create = (req, res) => {
    const provider = new Provider({
        name: req.body.name,
    })

    provider.save(provider).then(data => {
        res.send(data)
    }).catch(err =>{
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Provider'
        })
    })
};

// Retrieve all Provider from the database.
exports.findAll = (req, res) => {

};

// Find a single Provider with an id
exports.findOne = (req, res) => {

};

// Update a Provider by the id in the request
exports.update = (req, res) => {

};

// Delete a Provider with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Providers from the database.
exports.deleteAll = (req, res) => {

};
