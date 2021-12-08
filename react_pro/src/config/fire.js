import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAEx0hweJz5kk9stmv9w-63dudLSm_d2Qg",
  authDomain: "carauction-6ecea.firebaseapp.com",
  projectId: "carauction-6ecea",
  storageBucket: "carauction-6ecea.appspot.com",
  messagingSenderId: "993576992469",
  appId: "1:993576992469:web:d3078b8bbdf14b57df6c5c",
  measurementId: "${config.measurementId}"
});

export default app;