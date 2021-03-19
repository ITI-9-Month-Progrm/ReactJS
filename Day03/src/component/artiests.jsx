import {React, Component } from 'react';
import Artiest from './artiest';
import Error from '../error';

class Home extends Component {
    state = { 
        artiests:[],
        errMsg:""
     }
     renderArtiest({artiests}){
         if(artiests.length > 0){
             return artiests.map((artiest)=>(
                 <Artiest key={artiest.id} artiestInfo={artiest}></Artiest>
             ))
         }else{
            <Error></Error>
     }
    }

    render() { 
        return ( <div>
            <div className="container-fluid col-12">
                 <img src="/images/cover.png" alt="Main Cover"  ></img>
                 <div className="centered text-light h1"> MusicDB</div>
                 </div>
            { this.renderArtiest(this.state)}
        </div> );
    }

    componentDidMount(){
        fetch("http://localhost:3001/artists").then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data)
            this.setState(
                {artiests:data}
            )
        }).catch((err)=>{
            this.setState({
                errMsg:"Please Try Again"
            })
        })
    }
}
 
export default Home;