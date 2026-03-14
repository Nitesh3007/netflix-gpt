 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzKaqETBbMpMQmmQb_d1t-5xNbq-gr8BA",
  authDomain: "netflixgpt-001-5b3fd.firebaseapp.com",
  projectId: "netflixgpt-001-5b3fd",
  storageBucket: "netflixgpt-001-5b3fd.firebasestorage.app",
  messagingSenderId: "1091469119232",
  appId: "1:1091469119232:web:c7a426050ae4d68ae8ede5",
  measurementId: "G-26QYEWXS8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();