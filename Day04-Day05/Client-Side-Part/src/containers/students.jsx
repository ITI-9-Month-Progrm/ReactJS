import React, { Component } from 'react';
import Student from '../components/student';
import {connect} from 'react-redux';
import * as actions from '../actions/indexActions'
import Not_Found from '../components/Not_Found'
import { Link } from 'react-router-dom';

class Students extends Component {
  
    render() { 
       
        return ( <div>
             <div>
                <h2 className="text-center alert-primary">Student List</h2>
                {this.renderStudents(this.props)}
            </div> <Link to={`/addNewStudent`} className="btn btn-primary m-2">+</Link>
            <label className="font-weight-bold m-2">Add New Student</label>
        </div> );
    }
    componentDidMount(){
        console.log("State Updating " + this.props.getStudents());
    }
    renderStudents({students}){
        if(students){
            return students.map((student)=>{
                return(
                    <Student key={student._id} studentInfo={student}></Student>
                )
            })
        }
        return <Not_Found></Not_Found>
    }
}
 
const mapStateToProps = (state) => {
    console.log('2-',state)
    return {
        students: state.studentList
    }
}
export default connect(mapStateToProps, actions)(Students);