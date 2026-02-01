
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHmHkxRxKJ1Qswcxn9LOsirYjQ4ItKau8",
  authDomain: "ecommerce-react-isaul.firebaseapp.com",
  projectId: "ecommerce-react-isaul",
  storageBucket: "ecommerce-react-isaul.firebasestorage.app",
  messagingSenderId: "877779328839",
  appId: "1:877779328839:web:cf7fa0f82d75c7ac227662",
  measurementId: "G-ZFCB2C2RBG"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

