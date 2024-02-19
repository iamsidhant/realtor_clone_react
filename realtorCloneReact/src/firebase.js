// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLujVvEHyzlWmrA9rdFQNt7jPBaV7ip4A",
  authDomain: "realtor-clone-react-f3c7d.firebaseapp.com",
  projectId: "realtor-clone-react-f3c7d",
  storageBucket: "realtor-clone-react-f3c7d.appspot.com",
  messagingSenderId: "563469602087",
  appId: "1:563469602087:web:e06fc3b127243c9c6e6d02"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
