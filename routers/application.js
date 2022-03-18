const express = require("express");
const applicationController = require("../controllers/application");
const api = express.Router();

api.get("/applications/request", applicationController.requestList);
api.post("/applications", applicationController.applicationCreate);
api.get("/applications/aproved", applicationController.applicationAproved);
api.put("/applications/:id", applicationController.applicationConfirm);

module.exports = api;