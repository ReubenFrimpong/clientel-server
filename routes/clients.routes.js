module.exports = app => {
    const clients = require("../controllers/client.controller.js");

    var router = require("express").Router();

/**
 * @swagger
 *    components:
 *      schemas:
 *          Client:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - phone
 *              properties:
 *                  _id:
 *                     type: integer
 *                     description: The auto-generated id of the client.
 *                  name:
 *                     type: string
 *                     description: The name of the client.
 *                  phone:
 *                     type: string
 *                     description: Phone number of client
 *                  providers:
 *                     type: array
 *                     description: Providers of client
 *              example:
 *                  _id: 4234234advdf
 *                  name: Reuben
 *                  email: frimpongreuben66@gmail.com
 *                  phone: +2332467432
 *                  providers: [23423v24vg,ggergq34234]
 *
 */

/**
 * @swagger
 *  tags:
 *     name: Clients
 *     description: Clients management API
 *
 *
 */

/**
 * @swagger
 *  /api/clients:
 *      get:
 *          summary: Returns a list of all clients with their associated providers
 *          tags: [Clients]
 *          responses:
 *              200:
 *                  description: All the clients were fetched
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref:'#/components/schemas/Client'
 */
// Retrieve all Clients
    router.get("/", clients.findAll);


/**
 *@swagger
 *  /api/clients/{id}:
 *      get:
 *          summary: Get the client by id
 *          tags: [Client]
 *          parameters:
 *              - in:  path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The client id
 *          responses:
 *              200:
 *                  description: The client description by id
 *                  contents:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Client'
 *              404:
 *                  description: The client was not found
 *              500:
 *                  description: Server error
 */
// Retrieve a single Client with id
    router.get("/:id", clients.findOne);


/**
 * @swagger
 *  /api/clients:
 *      post:
 *          summary: Add a new client
 *          tags: [Clients]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          responses:
 *             200:
 *                 description: The client was successfully added
 *                 content:
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/schemas/Client'
 *             500:
 *                  description: Server error
 */
// Create a new Client
    router.post("/", clients.create);



/**
 * @swagger
 *  /api/clients/{id}:
 *      put:
 *          summary: Update the client by the id
 *          tags: [Client]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The client id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Client'
 *          responses:
 *              200:
 *                 description: The client was updated
 *                 content:
 *                     application/json:
 *                      schema:
 *                          $ref:'#/components/schemas/Client'
 *              404:
 *                  description: The client was not found
 *              500:
 *                  description: Server error
 */

    // Update a Client with id
    router.put("/:id", clients.update);

/**
 * @swagger
 *  /api/clients/{id}:
 *      delete:
 *          summary: Remove the client by id
 *          tags: [Clients]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The client id
 *
 *          responses:
 *              200:
 *                  description: The client was deleted
 *              404:
 *                  description: The client was not found
 *              500:
 *                  description: Server error
 */

    // Delete a Client with id
    router.delete("/:id", clients.delete);

    app.use('/api/clients', router);
};