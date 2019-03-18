import { FIREBASELOGIN } from '../actions'

const initialState = { tweets: '' }

export default ( state = initialState, action ) => {
    switch(action.type){
        case FIREBASELOGIN:
        console.log('-------------------------------------------------------------------------------------')
        console.log('firebase login action')
            return { tweets: 'firebase login のリデューサー'}
        default: 
            return state
    }
}



// const initialState = { value: 0 }

// export default ( state = initialState, action) => {
//     switch(action.type){
//         case INCREMENT:
//             return { value: state.value + 1 }
//         case DECREMENT:
//             return { value: state.value - 1 }
//         default:
//             return state

//     }
// }