import { 
    FIREBASELOGIN,LOGINSTATUS,FIREBASELOGOUT,SUBMITTWEET,GETTWEETS
 } from '../actions'
 import {
    GET_POSTS_REQUEST, GET_POSTS_SUCCESS
  } from '../actions'
import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

// const initialState = { reducer_tweets: [] }
const initialState = {
    isFetching: false,
    items: []
  }

export default ( state = [initialState] , action ) => {
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
                console.log('ログイン中')
                } else {
                console.log('ログアウト中。')
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
            const temperature = []
            firestore.collection("tweets").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data());
                    temperature.push(doc.data())
                });
            });
            return state
        case GET_POSTS_REQUEST:
            return [
              ...state,
              {
                isFetching: true,
                items: []
              }
            ]
        case GET_POSTS_SUCCESS:
            console.log('GET POSTS SUCCESS in reducer')
            console.log(action.posts)
            console.log('GET POSTS SUCCESS in reducer')
            return [
              ...state,
              {
                isFetching: false,
                items: action.temperature,
                lastUpdated: action.receivedAt
              }
            ]
        default: 
            return state
    }
}