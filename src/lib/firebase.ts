// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnla15folc5Cd4h7jc5Savn_3nPOO81tI",
  authDomain: "running-app-dabcf.firebaseapp.com",
  projectId: "running-app-dabcf",
  storageBucket: "running-app-dabcf.appspot.com",
  messagingSenderId: "35349462607",
  appId: "1:35349462607:web:f64b6bb102db4b5436b43a",
  measurementId: "G-LP121RQTYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db  = getFirestore();
export const auth = getAuth();
export const storage = getStorage();