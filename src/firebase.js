import firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyBJ1iCDdO59DET-Oztyn5nOewv8XSYROmk",
    authDomain: "bao-reactjs.firebaseapp.com",
    databaseURL: "https://bao-reactjs.firebaseio.com",
    projectId: "bao-reactjs",
    storageBucket: "bao-reactjs.appspot.com",
    messagingSenderId: "1079339931168",
    appId: "1:1079339931168:web:689737cf343ac032ff4e45",
    measurementId: "G-GVHFS4YMQW"
};

function firebaseInit() {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase


export default firebaseInit