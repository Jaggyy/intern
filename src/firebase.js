import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyC-QBjslqsffxfHb4JaUR7nJxzvy7LD0Nk",

    authDomain: "internproject-78e93.firebaseapp.com",

    projectId: "internproject-78e93",

    storageBucket: "internproject-78e93.appspot.com",

    messagingSenderId: "721871425574",

    appId: "1:721871425574:web:461744e497dbfa289b16e7",

    measurementId: "G-LYB8LLFPD0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);