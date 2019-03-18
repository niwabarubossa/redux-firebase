// reducers
import { FIREBASELOGIN } from '../actions'

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';


const initialState = { tweets: '' }

export default ( state = initialState, action ) => {
    switch(action.type){
        case FIREBASELOGIN:
            console.log('----------------------firebase login action-----------------------')
            firebase.auth().signInAnonymously()
            return state
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