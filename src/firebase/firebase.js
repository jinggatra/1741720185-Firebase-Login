import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDvt-_L5L3lDalhlvwXLUdcHJox5Ruol8",
    authDomain: "fir-reactjs-4469e.firebaseapp.com",
    databaseURL: "https://fir-reactjs-4469e.firebaseio.com",
    projectId: "fir-reactjs-4469e",
    storageBucket: "fir-reactjs-4469e.appspot.com",
    messagingSenderId: "812133458488",
    appId: "1:812133458488:web:34722af035b204a5987ccd",
    measurementId: "G-6JHDTD34SE"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db = baseDB;