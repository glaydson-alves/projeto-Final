import { app, db } from "./firebase_Config.js";
import { query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";



const cadastrar = querySelector("#cadastrarTurma")
const novaTurma = querySelector("InputTurma")

async function cadastrar() {
    try {
        const docRef = await addDoc(collection(db, "turmas"), {
            novaTurma: novaTurma.value
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Ocorreu o seguinte erro: " + error)
    }
}
cadastrar.addEventListener("click", () => {
    // evento.preventDefault()
    console.log(novaTurma.value)
    cadastrar()
    consultarTurma()
})

async function consultarTurma() {
    bloco.innerHTML = "" //limpando o elemento html antes de inserir registros, para não acumar dados
    const busca = query(collection(db, "turmas"), orderBy("numero"));

    const resultado = await getDocs(busca);
    resultado.forEach((item) => {

        console.log(item.id, " => ", item.data());

        bloco.innerHTML += `
          <tr>
            <th scope="row">1</th>
            <td>${item.data().nome}</td>
            <td>
            <button type="button" class="btn btn-danger rounded-5" id="${item.id}">Excluir</button>
            <button type="button" class="btn btn-primary rounded-5 " id="${item.id}">Vizualizar</button>
          </tr>
                `


        consultarUnico(evento.target.id)
    })
}

