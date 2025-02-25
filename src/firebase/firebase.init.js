// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD766856FiH_6punyVtUlstqoaxBgkdMn8",
  authDomain: "coffee-store-auth-ffbba.firebaseapp.com",
  projectId: "coffee-store-auth-ffbba",
  storageBucket: "coffee-store-auth-ffbba.firebasestorage.app",
  messagingSenderId: "642211568497",
  appId: "1:642211568497:web:8018f02b78d4ce304b34d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);