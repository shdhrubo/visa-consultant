// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD76lgFGILjJKy3vLuyYFFEaG3LB4-SQhY",
  authDomain: "visa-consultant-50b18.firebaseapp.com",
  projectId: "visa-consultant-50b18",
  storageBucket: "visa-consultant-50b18.appspot.com",
  messagingSenderId: "336141950923",
  appId: "1:336141950923:web:956f1005698e43509d204e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
