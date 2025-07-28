import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCZtDHtJbGDHY4Dy2TXTh-Cd9TB6Ouz5M",
  authDomain: "calculadora-deleite.firebaseapp.com",
  projectId: "calculadora-deleite",
  storageBucket: "calculadora-deleite.firebasestorage.app",
  messagingSenderId: "499021770511",
  appId: "1:499021770511:web:dd150600ceebee0364587a",
  measurementId: "G-H1NYDH4PM8"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);