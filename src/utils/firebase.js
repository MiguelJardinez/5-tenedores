import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqyGvV29LJQmeDDcTHDHAerxGrYOr2HoU",
  authDomain: "tenedores-cea51.firebaseapp.com",
  databaseURL: "https://tenedores-cea51.firebaseio.com",
  projectId: "tenedores-cea51",
  storageBucket: "tenedores-cea51.appspot.com",
  messagingSenderId: "868498408293",
  appId: "1:868498408293:web:e33544bc0c7e3c2034978c"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);