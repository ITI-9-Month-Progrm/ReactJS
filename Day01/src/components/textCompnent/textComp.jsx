import {React, Component } from 'react';
class TextComp extends Component {
    state = { 
        name:"",
     }
     changeText = (event)=>{
        this.setState({name:event.target.value})
      }
      setDefualt = ()=>{
        this.setState({name:"Hello, I am Defualt Text ^^"})
      }
    render() { 
        return (  <div className="Task01-1 border border-info rounded m-5" 
        style={{width:"50%"}} >
        <label className="m-2 ">Name</label>
        <input className="m-2 col-6" type="text" 
        placeholder="Enter Your Text" value={this.state.name} 
        onChange={this.changeText} />
        <p> {this.state.name}</p>
        <br></br>
        <input className="btn btn-primary col-3 " type="button" value="Set_Default" 
        onClick={this.setDefualt}
        style={{left:"227px",margin:"20px"}}/>
  
    </div> );
    }
}
 
export default TextComp;
