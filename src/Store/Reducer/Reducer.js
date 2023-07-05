const initialState = {
    Count:0
}

export default (state = initialState, action) => {
switch(action.type){
    case "inc":
        return {...state,Count: state.Count+1}

case "dec":
    return{...state,Count: state.Count-1}

        default: return state

};
 

}