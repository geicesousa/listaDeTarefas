( ()=>{
    
const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (event)=>{

    event.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]")
    const valorInput = input.value;
    // console.log(valorInput);

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content"> ${valorInput} </p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoConcluir());
    tarefa.appendChild(botaoDeletar());
    lista.appendChild(tarefa);
    input.value = " ";
}
    
novaTarefa.addEventListener("click", criarTarefa);

const botaoConcluir = ()=>{

    const botao = document.createElement("button");
    botao.classList.add("check-button");
    botao.innerText = "concluir";
    botao.addEventListener("click", concluirTarefa);
        return botao;
}

const concluirTarefa = (evento)=>{
    
    const botao = evento.target; 
    const tarefaCompleta = botao.parentElement;
    tarefaCompleta.classList.toggle("done");
}
 
const botaoDeletar = ()=>{

    const botao = document.createElement("button");

    botao.innerText = "deletar";
    botao.addEventListener("click", deletarTarefa);
        return botao;
}

const deletarTarefa = (evento)=>{

    const botao = evento.target;
    const tarefaCompleta = botao.parentElement;
    tarefaCompleta.remove();
        return botaoDeletar;
}
})();