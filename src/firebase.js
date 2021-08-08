import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCzgUeyHFdmnrovyxZq7mcWwfTojNYeEGI",
  authDomain: "gryphhack-backend.firebaseapp.com",
  projectId: "gryphhack-backend",
  storageBucket: "gryphhack-backend.appspot.com",
  messagingSenderId: "644674990974",
  appId: "1:644674990974:web:0cdcd46354ec562e5a792f",
  measurementId: "G-S3VV4X58PR"
};
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();