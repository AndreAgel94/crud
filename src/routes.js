const express = require("express");

const UserController = require("./controllers/userController");

const routes = express.Router();

routes.post("/users", UserController.create);
routes.get("/users", UserController.read);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;
