// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_GQxPLPA98_76AemdW6K4E983OkYPIfo",
  authDomain: "social-events-8c408.firebaseapp.com",
  projectId: "social-events-8c408",
  storageBucket: "social-events-8c408.appspot.com",
  messagingSenderId: "738671586183",
  appId: "1:738671586183:web:32110f30d04362d0c04122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;