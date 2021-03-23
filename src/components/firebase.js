import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-ua3WCZPL_Ivd1lTxngP-Xw1iJwuzlRE",
    authDomain: "linkedin-clone-ab8fe.firebaseapp.com",
    projectId: "linkedin-clone-ab8fe",
    storageBucket: "linkedin-clone-ab8fe.appspot.com",
    messagingSenderId: "948297436646",
    appId: "1:948297436646:web:393c238f9956e6ed855a27"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };