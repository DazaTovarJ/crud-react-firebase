// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMzFnlhcsAy3sHeJ4zvEo-ShHRg_HJbdo",
  authDomain: "crud-react-fc4d5.firebaseapp.com",
  projectId: "crud-react-fc4d5",
  storageBucket: "crud-react-fc4d5.appspot.com",
  messagingSenderId: "409643224109",
  appId: "1:409643224109:web:92f39935c227c046007ca4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
