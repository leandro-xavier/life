import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCZRsw1BIsqk_UTBr-4RuOHOl7z4q03Rk",
    authDomain: "lifeapp-db6db.firebaseapp.com",
    projectId: "lifeapp-db6db",
    storageBucket: "lifeapp-db6db.appspot.com",
    messagingSenderId: "815973988506",
    appId: "1:815973988506:web:2dd1f5b7bf1c48ab540723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    app
}