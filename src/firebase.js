// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhOeNh0wQWaDRjhLucwpx--tgnevvZbuk",
  authDomain: "kamar-pura-pura.firebaseapp.com",
  projectId: "kamar-pura-pura",
  storageBucket: "kamar-pura-pura.firebasestorage.app",
  messagingSenderId: "298728509956",
  appId: "1:298728509956:web:12e8b57315b3a4cd759b51",
  measurementId: "G-1T1EQ8DBK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
