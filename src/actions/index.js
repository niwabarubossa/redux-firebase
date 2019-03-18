export const READTWEETS = 'READTWEETS'
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const LOGINSTATUS = 'LOGINSTATUS'

export const readTweets = () => ({
    type: READTWEETS
})

export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})

export const loginStatus = () => ({
    type: LOGINSTATUS
})