import { FIREBASELOGIN,LOGINSTATUS,FIREBASELOGOUT,SUBMITTWEET,GETTWEETS } from '../actions'

import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

const initialState = { reducer_tweets: [] }

export default ( state = initialState , action ) => {
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
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                console.log('ログイン中だ')
                } else {
                console.log('ログアウト中です。')
                }
            });
            return state
        case SUBMITTWEET:
            firestore.collection('tweets').add({
                title: action.new_values.title,
                body: action.new_values.body,
                created_at: new Date(),
              }).then(() => {
              });
            return state 
        case GETTWEETS:
            // const tweets = firestore.collection("tweets").get().then(function(querySnapshot) {
            //     querySnapshot.forEach(function(doc) {
            //         console.log(doc.data());
            //     });
            // });
            // debugger;
            const temperature = []
            firestore.collection("tweets").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data());
                    temperature.push(doc.data())
                });
            });

            return Object.assign({}, 
                state, 
                {
                  reducer_tweets: temperature
                });
        default: 
            return state
    }
}