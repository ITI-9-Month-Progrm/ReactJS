import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Students from './components/students';
import StudentDetails from './components/studentDetails';

const AppRouting = ()=>{
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Students}></Route>
        <Route exact path='/students' component={Students}></Route>
        <Route exact path='/students/:id' component={StudentDetails}></Route>
      
    </Switch>
    </BrowserRouter>
}

export default AppRouting;