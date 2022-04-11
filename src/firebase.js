import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA0tcqXNBM1m55Opa36Hv_0h3NrGQy6OFs",
  authDomain: "bank-app-45284.firebaseapp.com",
  databaseURL: "https://bank-app-45284-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bank-app-45284",
  storageBucket: "bank-app-45284.appspot.com",
  messagingSenderId: "977057875729",
  appId: "1:977057875729:web:855628d024e07b866c2eb0",
  measurementId: "G-KR9WDMQ3GK"
};


const app = firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
  .then((result) => {
    // console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

  })
  .catch((error) => {
    console.log(error);
  })

  
}


const db = firebase.firestore();


export { db };
