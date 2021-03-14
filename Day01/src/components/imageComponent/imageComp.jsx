import {React, Component } from 'react';
class ImgComp extends Component {
  constructor(){
    super();
    this.srcNum = 0;
    this.sources = ["./assets/images/1.jpg", "./assets/images/2.jpg",
    "./assets/images/3.jpg", "./assets/images/4.jpg"];
    //completeSrc:this.source+this.srcNum+".jpg",
    this.flag = 0 ;
    this.timer = 0;
    this.currentSrc=this.sources[0];
    this.state = { 
     
      //currentSrc:"./assets/images/1.jpg",
      currentSrc:this.sources[0]
      }
  }
    
    
     
    nextPhoto = ()=> {
        
        if(this.srcNum<4){
          this.srcNum++;
          console.log(this.srcNum);
            this.setState({
              
              currentSrc:this.sources[this.srcNum-1]
            })
           
          }else{
              this.flag=1;
             
          }
       }
      previousPhoto = ()=>{
        console.log("7rrrrrrrrrrrrrrrrrrrammmm")
        if(this.srcNum>1){
          this.srcNum--;
            this.setState({
            currentSrc:this.sources[this.srcNum-1]
            })
          }else{
              this.flag=0;
          }
    }
    
    
     repeatePhoto = ()=>{
       if(this.flag === 0){
         this.nextPhoto();
           }
        else {
           this.previousPhoto();
        }
    }
    
   
     SlideShow = ()=>{
       this.timer = setInterval(this.repeatePhoto,500);
      
        console.log(this.srcNum);
    }
    
     Stop = ()=>{
        clearInterval(this.timer);
        if(this.srcNum>1 ){
          this.srcNum--;
          this.setState({
            currentSrc:this.sources[this.srcNum-1]
          })
        }
       
        
    }
    render() { 
        return ( 
            <div className="Task01-2 border border-success rounded m-5" style={{width:"50%",height:"400px"}}>
            <img src={this.state.currentSrc} alt="Ay7aga Now" style={{width:"98%",height:"380px",margin:"1%"}}/>
            <br/>
            <button className="btn btn-success m-5" onClick={this.nextPhoto}> &gt; </button>
            <button className="btn btn-success m-5" onClick={this.SlideShow}> &lt;&gt; </button>
            <button className="btn btn-success m-5" onClick={this.Stop}> || </button>
            <button className="btn btn-success m-5" onClick={this.previousPhoto}> &lt; </button>
            
          
          </div>
         );
    }
}
 
export default ImgComp;