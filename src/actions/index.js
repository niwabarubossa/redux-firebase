import firebase from 'firebase';
import { firestore } from '../plugins/fbConfig'
import 'firebase/firestore';

export const READTWEETS = 'READTWEETS'
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const LOGINSTATUS = 'LOGINSTATUS'
export const FIREBASELOGOUT = 'FIREBASELOGOUT'
export const SUBMITTWEET = 'SUBMITTEXT'
export const GETTWEETS = 'GETTWEETS'

export const CREATE_PROJECT = 'CREATE_PROJECT'

export const readTweets = () => ({
    type: READTWEETS
})
export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})
export const loginStatus = aiueo => async dispatch => {
    dispatch({ type: LOGINSTATUS, aiueo })
}
export const firebaseLogout = () => ({
    type: FIREBASELOGOUT
})
export const submitTweet = values => async dispatch => {
    const new_values = values
    dispatch({ type: SUBMITTWEET, new_values })
}
export const getTweets = () => ({
    type: GETTWEETS
})


export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (json) => {  
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}
export const getPosts = () => {
  return (dispatch) => {
      dispatch(getPostsRequest())
      const temperature = []
    //   firestore.collection("tweets").get().then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //           temperature.push(doc.data())
    //       });
    //   });
      return dispatch(getPostsSuccess(temperature))
  }
}
export const createProject = (project) => {
    return ( dispatch, getState , { getFirebase, getFireStore } ) => {
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'ryo',
            authorLastName: 'rrrr',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: CREATE_PROJECT, project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', project});
        })
    }
};