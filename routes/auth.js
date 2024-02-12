const express = require("express");
const Router = express.Router();
const controller = require("../controllers/user");

Router.route("/user").post(controller.send);

module.exports = Router;
