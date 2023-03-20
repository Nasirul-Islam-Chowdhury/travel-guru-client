// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhJ4Gfbx7_WwPQWz6jBBqKk-WK1trcqw",
  authDomain: "travel-guru-a682f.firebaseapp.com",
  projectId: "travel-guru-a682f",
  storageBucket: "travel-guru-a682f.appspot.com",
  messagingSenderId: "498395300148",
  appId: "1:498395300148:web:80c24c5ce594d5e014a561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app