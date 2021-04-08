import { Link } from "react-router-dom";


const Student = ({studentInfo})=>{
    const imgPath = "http://localhost:3000/" + studentInfo.picture;
    return (
        <div className="m-5 ">
   
            <div className="container d-inline-flex m-2 p-5 justify-content-between" key={studentInfo._id}>
            <img  className="rounded w-25 m-5" src='./images/1.jpg' alt='img' ></img>
             {/* <img className="rounded w-25 m-5" src={`${imgPath}`} alt="Profile Img" /> */}
                <div className="alert alert-info rounded w-50 p-3">
                        <h4>Name: {studentInfo.userName}</h4>
                        <h4>city: {studentInfo.city}</h4>
                        <h4>password: {studentInfo.password}</h4>
                        <h4>email: {studentInfo.email}</h4>
                </div>
                 
                  <div className="container text-center m-2">
                      
                  <Link to={`/students/:${studentInfo._id}`} className="btn btn-primary m-2">Details</Link>
                        <input type="button" value="Update" className="btn btn-secondary  m-2"/>
                        <input type="button" value="Delete" className="btn btn-danger m-2"/>

                    </div>
                    </div>
        </div>
       
    );

}
 
export default Student