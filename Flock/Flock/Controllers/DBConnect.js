// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA9fRxD6_YdyKsUluikFj0TufvSeJkmjE4",
    authDomain: "flock-adopse.firebaseapp.com",
    projectId: "flock-adopse",
    storageBucket: "flock-adopse.appspot.com",
    messagingSenderId: "825864194589",
    appId: "1:825864194589:web:13d1ac201a26039b63d4f4",
    measurementId: "G-XS9PSDMSWB"
};

var firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true })