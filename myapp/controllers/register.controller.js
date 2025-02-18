const Course = require("../models/course.model.js"); 
const Student = require("../models/student.model.js");

const registerStudentToCourse = async (req, res) => {
  try {
    const { schoolId, courseName } = req.body;

    console.log("schoolId: " + schoolId);
    console.log("courseName: " + courseName);

    const student = await Student.findOne({ schoolId: schoolId });

    const course = await Course.findOne({ courseName });
    
    console.log(student)
    console.log(course)

    if (!course) {
      return res.status(500).json({ message: "ERROR: Course not found" + course});
    }

    if (!student) {
      return res.status(500).json({ message: "ERROR: Student not found" + student});
    }

    const studentsCourses = await Course.find({ students: student._id });

    for (let studentsCourse of studentsCourses) {
      for (let studentsSession of studentsCourse.sessions) {
        for (let newCourseSession of course.sessions) {
          if (
            studentsSession.day === newCourseSession.day &&
            studentsSession.startTime < newCourseSession.startTime + newCourseSession.duration &&
            studentsSession.startTime + studentsSession.duration > newCourseSession.startTime
          ) {
            return res.status(500).json({
              message: "ERROR: Scheduling conflict with another course",
            });
          }
        }
      }
    }

    course.students.push(student._id);
    student.courses.push(course._id);

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
