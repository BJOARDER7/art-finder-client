// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmyaAljivRCfAzPgZgMvBGtWyfJB4Vc1Q",
  authDomain: "art-finder-firebase.firebaseapp.com",
  projectId: "art-finder-firebase",
  storageBucket: "art-finder-firebase.appspot.com",
  messagingSenderId: "472010933339",
  appId: "1:472010933339:web:97862ce1425b4c661eeb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;