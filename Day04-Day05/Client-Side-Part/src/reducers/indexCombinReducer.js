import {combineReducers} from 'redux'
import { getAllStudents } from './students';
import { getStudentDetails } from './studentDetails';

const rootReducer = combineReducers({
    studentList:getAllStudents,
    studentDetails:getStudentDetails
})
export default rootReducer;