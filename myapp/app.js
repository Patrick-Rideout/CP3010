const courseRoute = require ("./routes/course.route.js");
const studentRoute = require ("./routes/student.route.js");
const registerRoute = require ("./routes/register.route.js");

const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')

const cors = require('cors');

const app = express()

app.use(cors());

app.use(express.json());

app.use ("/api/courses", courseRoute);
app.use ("/api/students", studentRoute);
app.use ("/api/register", registerRoute);


const port = 3000




mongoose.connect('mongodb+srv://Student23:123CNA123@home23.upnms.mongodb.net/?retryWrites=true&w=majority&appName=Home23', { dbName: 'Home23' })
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(() => {
  console.log("Failed to connect to the database.");
});