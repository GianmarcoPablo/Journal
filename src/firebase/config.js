// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQjmLDY6e9XH79j3r-JO_lOowvfKBiJag",
    authDomain: "journalapp-6f982.firebaseapp.com",
    projectId: "journalapp-6f982",
    storageBucket: "journalapp-6f982.appspot.com",
    messagingSenderId: "341463398148",
    appId: "1:341463398148:web:2a832e3a44ab0ebe700251"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);