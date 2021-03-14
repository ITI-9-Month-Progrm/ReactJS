import React, { Component } from 'react';
import ImgComp from '../components/imageComponent/imageComp';
import TextComp from './../components/textCompnent/textComp';

class App extends Component {

  render() { 
    return (  
    <div className="Parent m-5 border rounded border-secoundery" >
     <TextComp></TextComp>
     <ImgComp></ImgComp>
      
    </div>
  );
  }
}
 
export default App ;