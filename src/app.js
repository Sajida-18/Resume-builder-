const express = require("express");

const app = express(); //initialize express app(mainly the server means server instance created)

app.use(express.json());

module.exports = app;
