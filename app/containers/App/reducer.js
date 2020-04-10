
const initState  = {
    names:['hi']
}


export default (state = initState, action) => {
    switch(action.type){
        default:
            return state;
        case 'ADD_NAME':
            let newState = [...state.names, ...action.names];
           return newState;
    }
}