const express = require("express");
const vendorController = require("../controllers/vendor");
const api = express.Router();

api.get("/vendors/:id", vendorController.vendorById);
api.get("/vendors", vendorController.vendorGetAll);
api.post("/vendors", vendorController.vendorCreate);
api.put("/vendors/:id", vendorController.vendorStock);

module.exports = api;