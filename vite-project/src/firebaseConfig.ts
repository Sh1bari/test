import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging/sw';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1plcKKBX0rYcyjHwzTlWe7ErIaPvFPZ8",
  authDomain: "rt5-hack-72cd0.firebaseapp.com",
  projectId: "rt5-hack-72cd0",
  storageBucket: "rt5-hack-72cd0.appspot.com",
  messagingSenderId: "472912746541",
  appId: "1:472912746541:web:6d01058b7ba41473d480a4",
  measurementId: "G-7SZ2Y9TMJD"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);