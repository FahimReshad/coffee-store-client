// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFHOE5YsbPRB-cHwXg3YBDEn97L_4tInQ",
  authDomain: "coffee-store-28f1f.firebaseapp.com",
  projectId: "coffee-store-28f1f",
  storageBucket: "coffee-store-28f1f.appspot.com",
  messagingSenderId: "9744990253",
  appId: "1:9744990253:web:dd31c2310ca62da088f8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;