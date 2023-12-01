// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBtg2RSuI8cZVSKQkX8L8L-SEbyr5fEmAg",
    authDomain: "sizzhy-5c6ae.firebaseapp.com",
    projectId: "sizzhy-5c6ae",
    storageBucket: "sizzhy-5c6ae.appspot.com",
    messagingSenderId: "1039862049926",
    appId: "1:1039862049926:web:c2364b1344cbda9341f507",
    measurementId: "G-NKDZF7FPY4"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;