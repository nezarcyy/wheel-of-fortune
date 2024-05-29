
import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6x_uGt3_z950V2pbCAg6DRt-WF-wvrH8",
  authDomain: "spin-fce34.firebaseapp.com",
  projectId: "spin-fce34",
  storageBucket: "spin-fce34.appspot.com",
  messagingSenderId: "1005164579604",
  appId: "1:1005164579604:web:29a851f39fd62fb4b35001",
  measurementId: "G-7YNLBGBLY6"
};


const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);

