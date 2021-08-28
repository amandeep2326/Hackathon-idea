import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQ_3VfO7N8pA1sWOTkEENPME3ZaIU-3-s",
  authDomain: "hackathon-9726e.firebaseapp.com",
  projectId: "hackathon-9726e",
  storageBucket: "hackathon-9726e.appspot.com",
  messagingSenderId: "377161877764",
  appId: "1:377161877764:web:8c1acfaf9a564503266851",
  measurementId: "G-98NF41DV94"
});
var db = firebaseApp.firestore();

export { db };