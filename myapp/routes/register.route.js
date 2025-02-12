const express = require("express");
const registerRouter = express.Router();

const { registerStudentToCourse } = require("../controllers/register.controller.js");

registerRouter.post("/", registerStudentToCourse);

module.exports = registerRouter;
