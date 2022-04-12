// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtHqdgXZfUfz6jO37zUc1WQY0QJj85Lm8",
  authDomain: "email-password-auth-6a8eb.firebaseapp.com",
  projectId: "email-password-auth-6a8eb",
  storageBucket: "email-password-auth-6a8eb.appspot.com",
  messagingSenderId: "1023026207720",
  appId: "1:1023026207720:web:a37b4b743993230049a25d",
  measurementId: "G-SMPXTP7MVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app