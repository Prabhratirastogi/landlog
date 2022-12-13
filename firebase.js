// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7GLmN6Y6MuNTRiJ0Q2dx7NvVMBbAywEI",
  authDomain: "landlog-342017.firebaseapp.com",
  projectId: "landlog-342017",
  storageBucket: "landlog-342017.appspot.com",
  messagingSenderId: "504861541459",
  appId: "1:504861541459:web:9f3e73db785eaa390b32a6",
  measurementId: "G-Z37VS5W135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth