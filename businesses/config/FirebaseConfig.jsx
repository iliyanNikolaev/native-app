import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6WYhVrGkp3U5OxQ2wO-kcLvwgMe3auFY",
  authDomain: "native-app-9d1bc.firebaseapp.com",
  projectId: "native-app-9d1bc",
  storageBucket: "native-app-9d1bc.appspot.com",
  messagingSenderId: "571777697407",
  appId: "1:571777697407:web:30e0526aefbf723324a14a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);