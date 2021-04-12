module.exports = app => {
    const providers = require("../controllers/provider.controller");

    var router = require("express").Router();

    // Create a new provider
    router.post("/", providers.create);

    // Retrieve all providers
    router.get("/", providers.findAll);

    // Retrieve a single Provider with id
    router.get("/:id", providers.findOne);

    // Update a provider with id
    router.put("/:id", providers.update);

    // Delete a provider with id
    router.delete("/:id", providers.delete);

    app.use('/api/providers', router);
};