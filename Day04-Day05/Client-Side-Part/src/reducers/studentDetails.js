export function getStudentDetails(state=null,action){
    if(action.type === "Studnet_Details"){
        return action.payload;
    }
    return state;
}