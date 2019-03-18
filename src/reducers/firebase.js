// reducers
import { FIREBASELOGIN } from '../actions'
import { LOGINSTATUS } from '../actions'

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
        case LOGINSTATUS:
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                // ログイン中
                console.log('ログイン中だ')
                console.log(user)
                } else {
                //　ログアウト中
                console.log('ログアウト中です。')
                }
            });
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