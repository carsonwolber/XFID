// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA22vQ7TgDTnccYoejnQMb49e4Gzx077jI",
  authDomain: "xfid-87cbb.firebaseapp.com",
  projectId: "xfid-87cbb",
  storageBucket: "xfid-87cbb.appspot.com",
  messagingSenderId: "66184942075",
  appId: "1:66184942075:web:332a59623b6c27602dfb5e",
  measurementId: "G-2DB3XZQD02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);