// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyDUd0O5-R_iel9W__-3fq54WHwj70FzJEI",
  authDomain: "grow-peak-media.firebaseapp.com",
  projectId: "grow-peak-media",
  storageBucket: "grow-peak-media.firebasestorage.app", 
  messagingSenderId: "83705472012",
  appId: "1:83705472012:web:f0cc9fb804d27c23cefa29"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore instance
export { db };
// You can now use `firestore` to interact with your Firestore database