import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1rYEuJMLL6JvvsHUmzpzQ7gN8nxDBM5o",
  authDomain: "learning-project-c0263.firebaseapp.com",
  projectId: "learning-project-c0263",
  storageBucket: "learning-project-c0263.appspot.com",
  messagingSenderId: "998524227737",
  appId: "1:998524227737:web:95efd39ef793b73edc6808"
};

// Initialize Firebase

 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)

 