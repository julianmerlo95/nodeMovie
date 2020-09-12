const express = require("express");
const showUrl = require("../controller/movies.controller");
const routes = express.Router();

routes.use(express.json());

routes.get("/content", showUrl);

module.exports = routes;
