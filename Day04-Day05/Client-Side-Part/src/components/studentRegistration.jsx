import React, { Component } from 'react';
class StudentRegistratin extends Component {
    state = { 
        newStudent:{
            userName:"",
            password:"",
            email:"",
            city:"",
            picture:""
        } }
    render() { 
        return ( <div className="text-center d-flex">
             <div className="d-block"><form action='/' method='post' className="text-center">
            <div className="alert-warning">
                    <p >Please Fill Student Data</p>
                </div>
                <div className="d-block ">
                        <div className="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name *"  name="userName"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email *"  name="email"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Password *"  name="password"/>
                            </div>
                            </div>
                            <div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your City *"  name="city"/>
                            </div>
                            <div className="form-group">
                                <label className="m-2">Your Photo</label>
                                <input type="file" className="" name="photo"/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                   
            </form></div>
            
            <img  className="rounded w-50 m-5" src='./images/1.jpg' alt="img" ></img>
        </div> );
    }
}
 
export default StudentRegistratin;