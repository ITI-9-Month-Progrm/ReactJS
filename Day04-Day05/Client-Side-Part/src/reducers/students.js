export function getAllStudents(state=null,action){
    if(action.type === "Studnet_List"){
        return action.payload;
    }
    return state; 
}