import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEx0hweJz5kk9stmv9w-63dudLSm_d2Qg",
    authDomain: "carauction-6ecea.firebaseapp.com",
    projectId: "carauction-6ecea",
    storageBucket: "carauction-6ecea.appspot.com",
    messagingSenderId: "993576992469",
    appId: "1:993576992469:web:d3078b8bbdf14b57df6c5c",
    measurementId: "G-XXT7THBP7T"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);