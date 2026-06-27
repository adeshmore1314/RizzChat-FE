// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPYyDw-51TvWz66C-v3nQTAMS2L7meVOU",
  authDomain: "auth-09-09-06.firebaseapp.com",
  projectId: "auth-09-09-06",
  storageBucket: "auth-09-09-06.firebasestorage.app",
  messagingSenderId: "442641878819",
  appId: "1:442641878819:web:78babab3228242de69c696",
  measurementId: "G-52L4ZLKLR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

