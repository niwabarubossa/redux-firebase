export const READTWEETS = 'READTWEETS'
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const LOGINSTATUS = 'LOGINSTATUS'
export const FIREBASELOGOUT = 'FIREBASELOGOUT'
export const SUBMITTWEET = 'SUBMITTEXT'

const aiueo = 'action/index.js　におけるconst'

export const readTweets = () => ({
    type: READTWEETS
})
export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})
// export const loginStatus = () => ({
//     type: LOGINSTATUS
// })
export const loginStatus = aiueo => async dispatch => {
    dispatch({ type: SUBMITTWEET, aiueo })
}
export const firebaseLogout = () => ({
    type: FIREBASELOGOUT
})
export const submitTweet = values => async dispatch => {
    // const values = values
    dispatch({ type: SUBMITTWEET, values })
}

// export const putEvent = values => async dispatch => {
//     const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
//     dispatch({ type: UPDATE_EVENT, response })
// }