import axios from 'axios';
const baseURL= "http://localhost:3000/api/student";
/////////////Get All Data
export async function getStudents(){
    console.log('Get All Student Actions');
    let payload =[];
    await fetch(`${baseURL}/allStudent`).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        payload = data;
        console.log(payload);
    }).catch((error)=>{
        console.log(error);
        console.log('Data Not Found');
    })
    console.log(payload);
    return {
        type:"Studnet_List",
        payload
    }
}
////////////////////////////////Get Student By ID
export async function getDetails(id=0){
    console.log('Get  Student Details Action');
    let payload ;
      let res =await axios.get(`${baseURL}/studentDetails?id=${id}`);
    console.log("result ->"+res);
    payload = res.data[0];
    console.log(payload);
    return {
        type:"Studnet_Details",
        payload
    }
}
////////////////////////////////Delete Student By ID
export async function deleteStudent(id=0){
    console.log('Get  Delete Student  Action');
    let payload ;
      let res =await axios.delete(`${baseURL}/deleteStudent?id=${id}`);
    console.log("result ->"+res);
    payload = res.data[0];
    console.log(payload);
    return {
        type:"Studnet_Delete",
        payload
    }
}
//////////////////////////////////Add New Student
export async  function addNewStudent(student){
    console.log("student : ", student);
    const newStudent = new FormData();
    newStudent.append('userName', student.userName);
    newStudent.append('password', student.password);
    newStudent.append('city', student.city);
    newStudent.append('email', student.email);
    newStudent.append('picture', student.photo);
    const { data } = await axios.post(`${baseURL}/addStudent`, newStudent);
    console.log("data", data);
    return data;
}
//////////////////////////////////Add New Student
export async  function updateStudent(id,student){
    console.log("id : "+ id + " student : ", student);
    const updateStud = new FormData();
    updateStud.append('userName', student.userName);
    updateStud.append('password', student.password);
    updateStud.append('city', student.city);
    updateStud.append('email', student.email);
    updateStud.append('picture', student.photo);
    const { data } = await axios.put(`${baseURL}/updateStudent`, updateStud);
    console.log("data", data);
    return data;
}

