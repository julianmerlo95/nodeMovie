const express = require("express");
const app = express();
const routes = require("./application/routes/index");
const config = require("../config/index");
const cors = require("cors");

// Middleware
app.use(cors(config.application.cors.server));
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Port running in 3000");
});
