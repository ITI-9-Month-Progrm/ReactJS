const Student = require("../models/studentModel");


const getAllStudent = async(req, res, next)=>{
 
  const user = await Student.find();
  res.send(user);
}
/////////////////////////////////////////////////////////
const addStudent =async (req, res, next)=>{
  console.log("posting data  ", req.body);
  console.log("posting file  ", req.file);

  const newUser =  Student({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city,
      picture: req.file.path
  });
  newUser.save().then((result)=>{
    res.send(result);
  }).catch((err) => {
    console.log(err);
})
}
/////////////////////////////////////////////////////////
const updateStudent =async (req, res, next)=>{
  console.log("posting data  ", req.body);
  console.log("posting file  ", req.file);
   
  Student.updateOne({ _id: req.query.id }, {
    $set: {
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      city: req.body.city,
      picture: req.file.path
    }
})
.then((result) => {
    console.log(result);
    res.send(result)
})
.catch((err) => {
    console.log(err);
})
}
///////////////////////////////////////////////////////
const studentDetails = (req,res)=>{
 
  Student.find({ _id: req.query.id })
      .then((result) => {
          res.send(result);

      }).catch((err) => {
          console.log(err);

      })
}
/////////////////////////////////////////////////////
const deleteStudent = (req,res)=>{
  Student.deleteOne({ _id: req.query.id})
                    .then((result) => {
                        console.log(result);
                        res.send("deleted");
                    })
                    .catch((err) => {
                        console.log(err);
                    })
}
//////////////////////////////////////////////////////////
module.exports = {
  getAllStudent,
  addStudent,
  updateStudent,
  studentDetails,
  deleteStudent
};



  