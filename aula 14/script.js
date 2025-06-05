const input = document.getElementeById("taskInput");// guarda informacão
const ul = document.getElementById("taskList");
//recuperando os elementos do HTML

function addTask() {// adiciona tarefa,aqui estamos criando uma função para ser atribuída dentro do botão "adicionada".
  if (input.value !== "") { // aqui informamos que se (if)input.value(valor do campo) for diferente(!==) de vazio (""), ele irá criar um elemento (createElement) de "li", o texto que ela possui é igual o input value, ou seja, o valor do input que será digitado.

    const li = document.createElement("li");// é para criar documento html
    li.textContent = input.value;//traduzindo esta linha está recebendo a criação da LI declarada na linha 8, que será criada e o  seu valor textual será acordo com o valo(value) do input.


    const removerBotao = document.createElement("button"); // Aqui estamos criando um botão(button) para remover itens da (li)

    removerBotao.textContent = "Remover"; // Chamamos  nossa const "removerBotao" e atribuindo a ele um texto/nome chamado: "remover";

    removerBotao.onclick = function () {//criamos uma função que ao clicar  neste botão ele irá executar uma função especifica
      ul.removeChild(li); // A função é pegar o elemento FILHO da ul, qie no caso é a "li" e renoce-lo.
    };
    ul.appendChild(li);//Aqui chamamos nossa const "li" e estamos add a ela um filho (appendChild)
    li.appendChild(removerBotao);// rempver bptao junto com ul, esta adicionando appendChild(filho); elemento é o elemento pai. filho é o nó a ser adicionado como filho de elemento


    input.value = ""; // usado para limpar o input, depois  de add o item em questão. deja campo vacio

  } else {
    alert("Calma Jovem, insira uma tarefa!."); // Caso  o campo de input estiver vasio, irá aparecer está mensagem
  }

}