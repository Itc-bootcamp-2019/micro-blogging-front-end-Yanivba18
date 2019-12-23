import firebase from "firebase";

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCzQFxBsDlBTdINazV-v2WNkPDwOJZqj84",
    authDomain: "micro-blogging-itc-cfdcc.firebaseapp.com",
    databaseURL: "https://micro-blogging-itc-cfdcc.firebaseio.com",
    projectId: "micro-blogging-itc-cfdcc",
    storageBucket: "micro-blogging-itc-cfdcc.appspot.com",
    messagingSenderId: "255096136442",
    appId: "1:255096136442:web:cb27a0e3793d29e27e1f43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase