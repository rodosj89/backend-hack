const express = require("express");
const userController = require("../controllers/user");
const api = express.Router();

api.get("/user/:id", userController.userById);

module.exports = api;