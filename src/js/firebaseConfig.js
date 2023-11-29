
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD68YYI9jnICBTcl7ar44zTFEoAAbZvm-w",
    authDomain: "projeto-siaep.firebaseapp.com",
    projectId: "projeto-siaep",
    storageBucket: "projeto-siaep.appspot.com",
    messagingSenderId: "963732964476",
    appId: "1:963732964476:web:f2f6c277da5365a492b5f9"
  };


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("conectado com sucesso")