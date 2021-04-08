export function deleteStudent(state=null,action){
    if(action.type === "Studnet_Delete"){
        return action.payload;
    }
    return state;
}