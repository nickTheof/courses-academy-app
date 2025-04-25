const express = require("express");
const errorController = require("./middlewares/error.middleware");

const app = express();

// Add global error middleware
app.use(errorController);

module.exports = app;
