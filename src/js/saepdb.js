import { app, db } from "./firebaseConfig.js";
import { query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";


//função para entrar na pagin d professor
document.getElementById("entrar").addEventListener("click", async () => {
    try {
        let email = document.querySelector("#floatingInput");
        let password = document.querySelector("#floatingPassword");

        const us = await checarUsuarios(email.value, password.value);

        if (us) {
            window.location.href = "./src/pages/tela-professor.html";
        } else {
            alert("Usuário ou password incorretos.");
        }
    } catch (error) {
        console.error("Ocorreu o seguinte erro: " + error);
    }
});

async function checarUsuarios(email, password) {
    const q = query(collection(db, "saep_db"), where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}


//****************** */


console.log("o caminho está correto")