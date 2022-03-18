const express = require("express");
const userController = require("../controllers/user");
const api = express.Router();

api.get("/users/:id", userController.userById);
api.get("/users", userController.userGetAll);

module.exports = api;