// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
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
  appId: "1:35349462607:web:dbe12ae4e4c0d84f36b43a",
  measurementId: "G-W7D4RJ027M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore();
export const auth = getAuth();
export const storage = getStorage();


function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initilialized or not in browser");
    const {subscribe} = writable<User | null> (null);
    return {
      subscribe,
    }
  }

   const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe  = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
   });

   return {
    subscribe,
   };
}

export const user = userStore();