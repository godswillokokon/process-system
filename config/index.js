// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC01YuDQ39fskZpzK67ErY2e6cLH_XF5bk",
  authDomain: "process-system.firebaseapp.com",
  databaseURL: "https://process-system.firebaseio.com",
  projectId: "process-system",
  storageBucket: "process-system.appspot.com",
  messagingSenderId: "420516515364",
  appId: "1:420516515364:web:62e1c311508f18477692b1",
  measurementId: "G-CVVYRXFEBT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();