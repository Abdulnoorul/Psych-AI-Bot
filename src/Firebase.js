// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw8bTP24UHgMCRk3tSB7SxsWOqCMr59DY",
  authDomain: "ai-bot-31f29.firebaseapp.com",
  projectId: "ai-bot-31f29",
  storageBucket: "ai-bot-31f29.firebasestorage.app",
  messagingSenderId: "408222365273",
  appId: "1:408222365273:web:29852fc4f4ec06ac736348",
  measurementId: "G-TX3L5MS8S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;