import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1oGey4U_Q7cBE3PQQB7iu39aE6vY-sNE",
    authDomain: "hm2-db.firebaseapp.com",
    projectId: "hm2-db",
    storageBucket: "hm2-db.appspot.com",
    messagingSenderId: "323659176828",
    appId: "1:323659176828:web:9a9de6002d46a97e9122f9"
};
firebase.initializeApp(firebaseConfig)


// firestore "database" API
export const db = firebase.firestore()

// used to log a user in
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()


// file storage API
export const storage = firebase.storage();


// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
