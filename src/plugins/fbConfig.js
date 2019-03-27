import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCb3AdT2RXCMWzYlsCz6FupHs7WYesxWa0",
    authDomain: "opty-firebase-0318.firebaseapp.com",
    databaseURL: "https://opty-firebase-0318.firebaseio.com",
    projectId: "opty-firebase-0318",
    storageBucket: "opty-firebase-0318.appspot.com",
    messagingSenderId: "952929210375"
    };
// firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })

const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();

export default firebase;


// import firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyCb3AdT2RXCMWzYlsCz6FupHs7WYesxWa0",
//     authDomain: "opty-firebase-0318.firebaseapp.com",
//     databaseURL: "https://opty-firebase-0318.firebaseio.com",
//     projectId: "opty-firebase-0318",
//     storageBucket: "opty-firebase-0318.appspot.com",
//     messagingSenderId: "952929210375"
//     };
// const firebaseApp = firebase.initializeApp(config);
// export const firestore = firebaseApp.firestore();