import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBR38_vSR2xR21BCg3nuzJDhYHY4RRkOB0",
    authDomain: "react-app-maps-dfab2.firebaseapp.com",
    projectId: "react-app-maps-dfab2",
    storageBucket: "react-app-maps-dfab2.appspot.com",
    messagingSenderId: "239439232497",
    appId: "1:239439232497:web:9a8924c49ee4bdf64b9850"
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