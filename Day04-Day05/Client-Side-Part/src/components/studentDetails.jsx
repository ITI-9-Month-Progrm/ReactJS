import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getDetails}from '../actions/indexActions'

class StudentDetails extends Component {
    renderStudentDetails({ details }) {
        if (details) {
            let folder = details.picture.slice(0,7);
            console.log(folder);
            let imgFile = details.picture.slice(8,details.picture.Length);
            console.log(imgFile)
            const imgPath = "http://localhost:3000/" + folder+"/"+imgFile;
            console.log(imgPath);
            return (
                <div>
                   <div className="container d-inline-flex m-2 p-5 justify-content-between" key={details._id}>
            
             <img className="rounded w-25 m-5" src={`${imgPath}`} alt="Profile Img" />
                <div className="alert alert-info rounded w-50 p-3">
                        <h4>Name: {details.userName}</h4>
                        <h4>city: {details.city}</h4>
                        <h4>password: {details.password}</h4>
                        <h4>email: {details.email}</h4>
                </div>
            </div>
          </div>
            )

        }
        return <p>no student details</p>
    }

    render() {
        return (<div>
           <h1 className="alert-success">Student Details</h1>
            {this.renderStudentDetails(this.props)}
        </div>)
    }
    componentDidMount() {
        //debugger;
        this.props.getDetails(this.props.match.params.id.split(':')[1])
        console.log(this.props.match.params.id.split(':')[1])
        console.log(this.props.match.params.id)

    }
}
 
export default connect(
    (state) => {
        return {
            details: state.studentDetails
        }
    },
    (dispatch) => {
        return bindActionCreators({ getDetails}, dispatch)
    }
)(StudentDetails)