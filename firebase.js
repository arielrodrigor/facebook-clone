import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB5b3sY2WaqW-_DedKQLL28dNtZ7P0CSrg",
    authDomain: "fb-clone-2a1c1.firebaseapp.com",
    projectId: "fb-clone-2a1c1",
    storageBucket: "fb-clone-2a1c1.appspot.com",
    messagingSenderId: "1064655533990",
    appId: "1:1064655533990:web:2f914b99175cbe54cc8167"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };