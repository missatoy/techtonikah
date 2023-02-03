import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


ReactDOM.createRoot(document.getElementById('root')).render(
  <App /> /* removed restricted app so it won't open 2 tabs after loading bar */
)


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAit4mCQ-1up-kaPCy8UM_lHF9sK2fS1VM",
  authDomain: "techtonikah-bcc5b.firebaseapp.com",
  projectId: "techtonikah-bcc5b",
  storageBucket: "techtonikah-bcc5b.appspot.com",
  messagingSenderId: "292884363040",
  appId: "1:292884363040:web:3ec4ae3c331dd352d88945",
  measurementId: "G-Y8YZF9KPY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
