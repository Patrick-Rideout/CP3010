const express = require("express");
const studentRouter = express.Router();

const { getStudents, getStudent, createStudent, updateStudent, deleteStudent } = require("../controllers/student.controller.js");

console.log({ getStudents, getStudent, createStudent, updateStudent, deleteStudent });

studentRouter.get("/", getStudents);
studentRouter.get("/:id", getStudent);
studentRouter.post("/", createStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;