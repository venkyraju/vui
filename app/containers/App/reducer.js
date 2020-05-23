

import { fromJS, List } from 'immutable';
import produce from "immer";

const initState  = fromJS({
    names:[1]
})


// export default (state = initState, action) => {
//     switch(action.type){
//         default:
//             return state;
//         case 'ADD_NAME':
//              const names = state.get('names')
//             //let newState = [...state.names, ...action.names];
//            return state.set('names', names.push(action.names));
//     }
// }

const initImState  = {
    names:[{
        first: 'vil',
        middle: 'hi',
        last:'nil',
        phno:[789,8789]
    },{
        first: 'SI',
        middle: 'VI',
        last:'KUI',
        phno:[999,888,787878]
    }
]
};

const withImmer =  produce((draft = initImState, action) => {
    switch(action.type){
        default:
            return draft;
        case 'ADD_NAME':
             // const names = state.get('names')
            //let newState = [...state.names, ...action.names];
            // draft.names.push(action.names);
            // draft.names.first = draft.names.first + action.names ;
            // draft.names.push({
            //     first: action.names + 1,
            //     middle: 'VI',
            //     last:'KUI',
            //     phno:[333,33,33]
            // }); 
            draft.names.map((n) => {
                n.first = n.first + (action.names + 1);
            })
           return draft;
    }
})

export default withImmer;