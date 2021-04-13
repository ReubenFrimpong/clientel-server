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
    Provider.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving providers."
            });
        });
};

// Find a single Provider with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Provider.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Provider with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Provider with id=" + id });
        });
};

// Update a Provider by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    Provider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Provider with id=${id}. Maybe Provider was not found!`
                });
            } else res.send({ message: "Provider was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Provider with id=" + id
            });
        });
};

// Delete a Provider with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Provider.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Provider with id=${id}. Maybe Provider was not found!`
                });
            } else {
                res.send({
                    message: "Provider was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Provider with id=" + id
            });
        });
};

