import { initializeApp } from "firebase/app";
//Mío
/* const firebaseConfig = {
  apiKey: "AIzaSyD9QakWwtfRnx18MS_PRinNfU3WMAjAddY",
  authDomain: "bootdef-opyjyf.firebaseapp.com",
  databaseURL: "https://bootdef-opyjyf.firebaseio.com",
  projectId: "bootdef-opyjyf",
  storageBucket: "bootdef-opyjyf.appspot.com",
  messagingSenderId: "647916085634",
  appId: "1:647916085634:web:30dff7a1211cdc1ec8ef9b"
}; */

//prueba
const firebaseConfig = {
  apiKey: "AIzaSyDKj-V6NvGBRBI6Vr3nIJ-d05tl6at8QpI",
  authDomain: "tugerente-d2c0a.firebaseapp.com",
  projectId: "tugerente-d2c0a",
  storageBucket: "tugerente-d2c0a.appspot.com",
  messagingSenderId: "45312355582",
  appId: "1:45312355582:web:4ffe161b33f75c0e9849af",
  measurementId: "G-7B8GJZM0V4"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;