let list = document.getElementById("list");
let input = document.getElementById("input");
let btn = document.createElement("button");
let lista_de_tarefas = [];
let addTask = function() {
    if (input.value != "") {
        let modelo_de_tarefa = { id: Math.random(), conteudo: input.value };

        lista_de_tarefas.push(modelo_de_tarefa);

        list.innerHTML += `<li>${modelo_de_tarefa.conteudo}     
        <button onclick="removeTask(${modelo_de_tarefa.id})">X</button>    
        </li>`;

        localStorage.setItem("listSaved", JSON.stringify(lista_de_tarefas));

        return (input.value = "")
    } else {
        alert("o campo não pode estar vazio!!");
    }
};
window.onload = function() {
    let localStorage_variavel = localStorage.getItem("listSaved");

    if (localStorage_variavel) {
        lista_de_tarefas = JSON.parse(localStorage_variavel);
    }
    for (let i = 0; i < lista_de_tarefas.length; i++) {

        list.innerHTML += `<li>${lista_de_tarefas[i].conteudo}     
        <button onclick="removeTask(${lista_de_tarefas[i].id})">X</button>    
        </li>`;

    }
};

let removeTask = function(id) {
    let nova_lista_sem_o_item_clicado = [];
    for (let i = 0; i < lista_de_tarefas.length; i++) {
        if (lista_de_tarefas[i].id !== id) {
            nova_lista_sem_o_item_clicado.push(lista_de_tarefas[i]);
        }
    }

    localStorage.setItem("listSaved", JSON.stringify(nova_lista_sem_o_item_clicado));
    location.reload();
};

let clearTask = function() {
    list.innerHTML = "";
    localStorage.getItem("listSaved", JSON.stringify(lista_de_tarefas));

    alert("Todas tarefas foram excluidas")
};