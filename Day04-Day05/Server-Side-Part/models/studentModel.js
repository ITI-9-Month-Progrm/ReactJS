const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    picture: {type: String, required: true}
});

const Student = mongoose.model('students',studentSchema);



module.exports =Student;