import { combineReducers } from 'redux'
import firebase from './firebase'
import { reducer as form } from 'redux-form'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({ 
    firebase: firebase,
    form: form,
    firestore: firestoreReducer 
});