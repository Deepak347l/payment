// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyACwb52iRqekWgJcrqDPSn_hBERiNSAQc0",
  authDomain: "paymentlink-369c6.firebaseapp.com",
  projectId: "paymentlink-369c6",
  storageBucket: "paymentlink-369c6.appspot.com",
  messagingSenderId: "216941734876",
  appId: "1:216941734876:web:bea04f0f30a3740ca87d19",
  measurementId: "G-W72FCX09NY"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
