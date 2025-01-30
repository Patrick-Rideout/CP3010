const express = require("express");
const courseRouter = express.Router();

const { getCourses, getCourse, createCourse, updateCourse, deleteCourse } = require("../controllers/course.controller.js");

console.log({ getCourses, getCourse, createCourse, updateCourse, deleteCourse });

courseRouter.get('/', getCourses);
courseRouter.get('/:id', getCourse);
courseRouter.post('/', createCourse);
courseRouter.put('/:id', updateCourse);
courseRouter.delete('/:id', deleteCourse);

module.exports = courseRouter;
