const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    schoolId: {
        type: Number,
        required: true
        },
    firstName: {
        type: String,
        required: [true, "Please enter the first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter the last name"],
    },
    dob: {
        type: String,
        required: [true, "Please enter the date of birth"],
    },
    addressUnit: {
        type: String,
    },
    addressStreet: {
        type: String,
        required: [true, "Please enter the street address"],
    },
    addressCity: {
        type: String,
        required: [true, "Please enter the city"],
    },
    addressStateProv: {
        type: String,
        required: [true, "Please enter the state or province"],
    },
    addressCountry: {
        type: String,
        required: [true, "Please enter the country"],
    },
    addressPostCode: {
        type: String,
        required: [true, "Please enter the postal code"],
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
    },
    emergContactName: {
        type: String,
        required: [true, "Please enter an emergency contact name"],
    },
    emergContactPhone: {
        type: String,
        required: [true, "Please enter an emergency contact phone number"],
    },
    emergContactRel: {
        type: String,
        required: [true, "Please enter the relationship with emergency contact"],
    },
    program: {
        type: String,
        required: [true, "Please enter the program name"],
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
},
{ 
    timestamps: true
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
