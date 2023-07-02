// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQkLYx7RBfGDGfDEV_o7FVtbySgJwgro",
  authDomain: "newagent-8dd92.firebaseapp.com",
  databaseURL: "https://newagent-8dd92.firebaseio.com",
  projectId: "newagent-8dd92",
  storageBucket: "newagent-8dd92.appspot.com",
  messagingSenderId: "509066033859",
  appId: "1:509066033859:web:acbe66ab45e247f473c076"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);