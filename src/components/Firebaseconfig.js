// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB4u9zvkeWLjCGcFVAGHv3xe43Npc67kmI",
  authDomain: "slides-app-27710.firebaseapp.com",
  projectId: "slides-app-27710",
  storageBucket: "slides-app-27710.appspot.com",
  messagingSenderId: "850647838442",
  appId: "1:850647838442:web:e30d005861cabf55443193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app);
export default app;