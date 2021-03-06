import { firebaseConfig } from "./config"
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' })
export const SignInwithGoogle = () => auth.signInWithPopup(GoogleProvider);