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

app.use("/products", require("../src/routes/product.route"));
app.use("/users", require("../src/routes/user.route"));

// global error handler
app.use(errorHandler);

let port = 3000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
