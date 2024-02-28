// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm73ARSdjGOvnNWuCw7vGs7YuYR8UaDiw",
  authDomain: "healthyhabit-e4340.firebaseapp.com",
  projectId: "healthyhabit-e4340",
  storageBucket: "healthyhabit-e4340.appspot.com",
  messagingSenderId: "872927831633",
  appId: "1:872927831633:web:33741529aabdfa6baeba70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}