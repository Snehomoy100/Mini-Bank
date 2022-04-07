import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0tcqXNBM1m55Opa36Hv_0h3NrGQy6OFs",
  authDomain: "bank-app-45284.firebaseapp.com",
  projectId: "bank-app-45284",
  storageBucket: "bank-app-45284.appspot.com",
  messagingSenderId: "977057875729",
  appId: "1:977057875729:web:855628d024e07b866c2eb0",
  measurementId: "G-KR9WDMQ3GK"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };
