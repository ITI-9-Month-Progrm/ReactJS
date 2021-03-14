import { React} from 'react';
import { useHistory } from 'react-router-dom';



 const ErrorComp = ()=>{
    const history = useHistory();
     const goToHome = () => history.push('/');
     return(
                <div>
                    <img src='./assets/images/error.png' alt="Ay7aga"/>
                    <br/>
                    <button className="btn btn-primary" onClick={goToHome}>Home</button>
                </div> 
     );
 }
export default ErrorComp;