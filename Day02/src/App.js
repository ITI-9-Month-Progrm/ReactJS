
import './App.css';
import ErrorComp from './components/error';
import AboutComp from './components/about';
import ProfileComp from './components/profile';
import HomeComp from './components/home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <div className="container">
       <BrowserRouter>
            <nav class="navbar-nav navbar-expand bg-dark col-12 navbar-dark nav-pills" >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/about'>About</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/profile'>Profile</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/error'>Error</Link>
                </li>

              </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomeComp}></Route>
          <Route exact path="/about" component={AboutComp}></Route>
          <Route exact path="/profile" component={ProfileComp}></Route>
          <Route exact path="" component={ErrorComp}></Route>
        </Switch>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
