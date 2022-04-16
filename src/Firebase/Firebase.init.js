// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6UOLnOBQULkKkDzwEQKIcyA8Wc4KuHk",
  authDomain: "assignment-10-4050d.firebaseapp.com",
  projectId: "assignment-10-4050d",
  storageBucket: "assignment-10-4050d.appspot.com",
  messagingSenderId: "1004371329301",
  appId: "1:1004371329301:web:b06a249d329c26a4f0e91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;