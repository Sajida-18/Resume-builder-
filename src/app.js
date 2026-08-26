const express = require("express");

const app = express(); //initialize express app(mainly the server means server instance created)

app.use(express.json());

/* Require all the routes here */
const authRouter = require("./routes/auth.routes");

/*using all the routes here */
app.use("/api/auth", authRouter);

module.exports = app;
