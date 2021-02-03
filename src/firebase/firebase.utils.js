import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB7D7ZOUwWMQw-UyOxidA_u6AFfmvnLrBg',
  authDomain: 'crwn-db-94a5b.firebaseapp.com',
  projectId: 'crwn-db-94a5b',
  storageBucket: 'crwn-db-94a5b.appspot.com',
  messagingSenderId: '494712191668',
  appId: '1:494712191668:web:52c16cd1d6ce7188c535e1',
  measurementId: 'G-NYZG1W575B'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return // if it is null
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) { // if the user is not in the database, create it
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
