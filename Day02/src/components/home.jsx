import { React, Component } from 'react';
import StudentList from '../students.json'
import StudentComp from './student';
class HomeComp extends Component {
    state = { 
        name:"",
        age:0,
        studentList:StudentList
     }
     changeName = (event)=>
     {
        this.setState({name:event.target.value});
        //console.log(event.target.value);
     }
     changeAge = (event)=>
     {
        this.setState({age:event.target.value});
       // console.log(event.target.value);
     }
     register = ()=>{
        var oldList  = this.state.studentList;
        let len  =oldList.length;
        let oid = oldList[len-1].id;
        oldList.push({id:oid+1,name:this.state.name,age:this.state.age});
        this.setState({studentList:oldList});
        alert('congratulations^^ Student was Added')
        //console.log(this.state.studentList)
     }
    render() { 
        return ( <div>
            <fieldset className="RigestetForm  rounded col-8 border-info">
               <legend>
               <h1 className="text-info">Registration</h1>
               </legend> 
                
                <lable className="col-1 m-3 text-info h5">Name</lable>
                <input className="col-5 m-3" type="text" placeholder="please enter your name" onChange={this.changeName}/>
                <br/>
                <lable className="col-1 m-2 text-info h5">Age</lable>
                <input className="col-5" type="text" placeholder="please enter your age" onChange={this.changeAge}/>
                <br/>
                <button className="m-5 btn btn-info" onClick={this.register}>Register</button>
            </fieldset>
        <div className="studentTable rounded col-6 border-info">
        <div className="TableHead">
                    <lable className="cutomeTable fontSize h3 ">Name</lable>
                    <lable className="cutomeTable fontSize h3">Age</lable>
                </div>
            <StudentComp list={this.state.studentList}></StudentComp>
        </div>
        </div> );
    }
}
 
export default HomeComp;
