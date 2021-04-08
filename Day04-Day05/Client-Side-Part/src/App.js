import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/indexCombinReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promiseMW from 'redux-promise'
//import AppRouting from './app-routing.js';
import './App.css';
import Students from './containers/students'
import StudentDetails from './components/studentDetails';
import Not_Found from './components/Not_Found';
import StudentRegistratin from './components/studentRegistration';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore);
class App extends Component {
  state = {  }
  render() { 
    return (  <div className="App">
              
               <Provider store={createStoreWithMW(rootReducer)}>
                    <BrowserRouter>
                          <Switch>
                              <Route exact path='/' component={Students}></Route>
                              <Route exact path='/students' component={Students}></Route>
                              <Route exact path='/students/:id' component={StudentDetails}></Route>
                              <Route exact path='/addNewStudent' component={StudentRegistratin}></Route>
                              <Route  path='*' component={Not_Found}></Route>
                          </Switch>
                      </BrowserRouter>
               </Provider>
  </div> );
  }
}
 
export default App;
