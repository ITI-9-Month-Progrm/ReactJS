const express = require('express');
const app = express();
const path = require('path');
const { getAllStudent, addStudent, updateStudent, deleteStudent, studentDetails } = require('../controllers/studentController');

const multer = require('multer');

app.use(express.static(path.join(__dirname, './uploads/')));
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");

    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+".jpg");
    }
});

const upload = multer({ storage: storage });

const userRouter = express.Router();
userRouter.get('/allStudent',getAllStudent);
userRouter.get('/studentDetails',studentDetails);
userRouter.post('/addStudent', upload.single('picture'),addStudent);
userRouter.post('/updateStudent', upload.single('picture'),updateStudent);
userRouter.delete('/deleteStudent',deleteStudent);

module.exports = userRouter;