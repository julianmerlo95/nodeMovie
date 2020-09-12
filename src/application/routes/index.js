const express = require("express");
const routes = express.Router();
const moviesRoute = require("./movies.router");

// Middleware
routes.use(express.json());

routes.use("/api", moviesRoute);

module.exports = routes;
