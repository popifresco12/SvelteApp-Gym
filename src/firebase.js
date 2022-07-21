// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkVPMbjOcxadsIqiGuJ-pdq6giyCjP5A",
  authDomain: "proyecto-gym-81068.firebaseapp.com",
  projectId: "proyecto-gym-81068",
  storageBucket: "proyecto-gym-81068.appspot.com",
  messagingSenderId: "392892632011",
  appId: "1:392892632011:web:7407c87666c07f93a1444e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();