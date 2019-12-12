require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
const product = require("./routes/product.route"); // Imports routes for the products
app.use("/products", product);

//app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
