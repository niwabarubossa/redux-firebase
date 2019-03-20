// reducers
// import { FIREBASELOGIN } from '../actions'
import { FIREBASELOGIN,LOGINSTATUS,FIREBASELOGOUT,SUBMITTWEET } from '../actions'

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';


const initialState = { text: '直接' }

export default ( state = {}, action ) => {
    switch(action.type){
        case FIREBASELOGIN:
            console.log('----------------------firebase login action-----------------------')
            firebase.auth().signInAnonymously()
            return state
        case FIREBASELOGOUT:
            firebase.auth().signOut()
            .then(_ => {
                console.log('logout complete')
            }, err => {
            // エラーを表示する等
            });
            return state
        case LOGINSTATUS:
            const test = action.aiueo
            console.log(test)
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
        case SUBMITTWEET:
        // 2
            const content = action.values
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            firestore.collection('tweets').add({
                content: this.state.text,
                created_at: new Date(),
              }).then(() => {
                console.log('aaa')
              });
            

            return { state, content }
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