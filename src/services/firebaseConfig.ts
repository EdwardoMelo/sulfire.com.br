// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa76oK-yiFWbHvieqkX3P_0gLNg4vCS28",
  authDomain: "marine-actor-459701-f3.firebaseapp.com",
  projectId: "marine-actor-459701-f3",
  storageBucket: "marine-actor-459701-f3.firebasestorage.app",
  messagingSenderId: "128835999273",
  appId: "1:128835999273:web:3dd47ffd36cba07aa02e38",
  measurementId: "G-DR4YR1GGDM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
