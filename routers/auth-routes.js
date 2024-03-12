const express = require("express");

const routers = express.Router();
const reminder = require("../controllers/auth-controller");
routers.route("/").post(reminder);

module.exports = routers;