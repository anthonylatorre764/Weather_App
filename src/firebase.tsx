// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV-SRkVVVP7Hu7jFvX8sdlt5bxKTeq0Hw",
  authDomain: "weather-app-d3be4.firebaseapp.com",
  projectId: "weather-app-d3be4",
  storageBucket: "weather-app-d3be4.appspot.com",
  messagingSenderId: "326339491455",
  appId: "1:326339491455:web:063803bf7dd21b9a03b14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


