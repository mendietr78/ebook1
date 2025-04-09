const path = require("path");
const express = require("express");
const session = require('express-session');
const morgan = require("morgan");
require('dotenv').config();


// Configuración de la aplicación Express
const app = express();
const indexRoutes = require("./src/routes/index.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


  // Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/", indexRoutes);


// Start server (type: npm run dev)
app.listen(app.get("port"), () =>
{
    console.log("Server on port " + app.get("port"));
});

const bodyParser = require('body-parser');


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

