
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './component/artiests';
// import Artiest from './component/artiest';
import ArtiestDetails from './component/artiestDetails';
import Error from './error';

function App() {
  return (
    <div className="App" >
       
        <BrowserRouter>
          <Switch>
            
            <Route exact path='/artiests/:id' component={ArtiestDetails} ></Route>
            <Route exact path='/artiests' component={Home} ></Route>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='*' component={Error}></Route>
       
           
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
