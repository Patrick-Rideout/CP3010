const Course = require("../models/course.model.js");
const Student = require("../models/student.model.js");

const registerStudentToCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const course = await Course.findById(courseId);
    const student = await Student.findById(studentId);

    if (!course) {
      return res.status(500).json({ message: "ERROR: Course not found" });
    }

    if (!student) {
      return res.status(500).json({ message: "ERROR: Student not found" });
    }

    const studentsCourses = await Course.find({ students: studentId });

    for (let studentsCourse of studentsCourses) {

      for (let studentsSession of studentsCourse.sessions) {

        for (let newCourseSession of course.sessions) {

          if (studentsSession.day === newCourseSession.day && (studentsSession.startTime < newCourseSession.startTime + newCourseSession.duration &&
              studentsSession.startTime + studentsSession.duration > newCourseSession.startTime)
          ) {
            return res.status(500).json({
              message: "ERROR: Scheduling conflict with another course",
            });
          }
        }
      }
    }

    course.students.push(studentId);
    student.courses.push(courseId);

    await course.save();
    await student.save();

    return res.status(200).json({
      message: "SUCCESS: Student successfully registered for the course",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { registerStudentToCourse };
