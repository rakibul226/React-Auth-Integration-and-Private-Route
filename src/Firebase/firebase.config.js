// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4GZCOHs_gClVA8WMcRIbeLcWJKWAGxg",
  authDomain: "react-auth--and-private-route.firebaseapp.com",
  projectId: "react-auth--and-private-route",
  storageBucket: "react-auth--and-private-route.appspot.com",
  messagingSenderId: "30802219664",
  appId: "1:30802219664:web:b33339cfe9d3bcad4abe15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;