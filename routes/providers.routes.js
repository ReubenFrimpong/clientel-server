module.exports = app => {
    const providers = require("../controllers/provider.controller");

    var router = require("express").Router();

/**
 * @swagger
 *    components:
 *      schemas:
 *          Provider:
 *              type: object
 *              required:
 *                  - name
 *              properties:
 *                  _id:
 *                     type: integer
 *                     description: The auto-generated id of the provider.
 *                  name:
 *                     type: string
 *                     description: The name of the provider.
 *              example:
 *                  _id: 4234234advdf
 *                  name: Provider 1
 *
 */

/**
 * @swagger
 *  tags:
 *     name: Providers
 *     description: Providers management API
 *
 *
 */

/**
 * @swagger
 *  /api/providers:
 *      get:
 *          summary: Returns a list of all providers with their associated providers
 *          tags: [Providers]
 *          responses:
 *              200:
 *                  description: All the providers were fetched
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:'#/components/schemas/Provider'
 */

    // Retrieve all providers
    router.get("/", providers.findAll);

/**
 *@swagger
 *  /api/providers/{id}:
 *      get:
 *          summary: Get the provider by id
 *          tags: [Provider]
 *          parameters:
 *              - in:  path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The provider id
 *          responses:
 *              200:
 *                  description: The provider description by id
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Provider'
 *              404:
 *                  description: The provider was not found
 *              500:
 *                  description: Server error
 */

    // Retrieve a single Provider with id
    router.get("/:id", providers.findOne);

/**
 * @swagger
 *  /api/providers:
 *      post:
 *          summary: Add a new provider
 *          tags: [Providers]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Provider'
 *          responses:
 *             200:
 *                 description: The provider was successfully added
 *                 content:
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/Provider'
 *             500:
 *                  description: Server error
 */
    // Create a new provider
    router.post("/", providers.create);


/**
 * @swagger
 *  /api/providers/{id}:
 *      put:
 *          summary: Update the provider by the id
 *          tags: [Provider]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The provider id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Provider'
 *          responses:
 *              200:
 *                 description: The provider was updated
 *                 content:
 *                     application/json:
 *                      schema:
 *                          $ref:'#/components/schemas/Provider'
 *              404:
 *                  description: The provider was not found
 *              500:
 *                  description: Server error
 */

    // Update a provider with id
    router.put("/:id", providers.update);

/**
 * @swagger
 *  /api/providers/{id}:
 *      delete:
 *          summary: Remove the provider by id
 *          tags: [Providers]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The provider id
 *
 *          responses:
 *              200:
 *                  description: The provider was deleted
 *              404:
 *                  description: The provider was not found
 *              500:
 *                  description: Server error
 */
    // Delete a provider with id
    router.delete("/:id", providers.delete);

    app.use('/api/providers', router);
};