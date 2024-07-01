// src/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTWUXZt-rpLQHjo6r3-230Jv2TCtpFNKI",
  authDomain: "my-exam-ae6f4.firebaseapp.com",
  projectId: "my-exam-ae6f4",
  storageBucket: "my-exam-ae6f4",
  messagingSenderId: "48038029791",
  appId: "1:48038029791:web:4495a8fe19687ebdea3c6a",
  measurementId: "G-889BJ761C5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

