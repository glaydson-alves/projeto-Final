
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPeG5KnlQVnkWamK2x4MOma4MWDzC_Y_g",
    authDomain: "turmas-5b1bc.firebaseapp.com",
    projectId: "turmas-5b1bc",
    storageBucket: "turmas-5b1bc.appspot.com",
    messagingSenderId: "304203522810",
    appId: "1:304203522810:web:67b3529166268d0c01df43"
  };


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("conectado com sucesso")


