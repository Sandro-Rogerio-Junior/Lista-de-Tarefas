let inputarefa = document.getElementById("inputarefa")
let listaDeTarefas = document.getElementById("listaDeTarefas")
let botaosalvar = document.getElementById("save")


botaosalvar.addEventListener("click", criartarefa)

function criartarefa(){
  let tarefa = inputarefa.value
  let li = criarli(tarefa)
  listaDeTarefas.appendChild(li)
  inputarefa.value = ""
  
  
 


}
function criarli(tarefa){
  let li = document.createElement("li")
  let newtarefa = document.createElement("span")
  newtarefa.classList.add("span1")
  newtarefa.innerText = tarefa
  let newspanbotão = document.createElement("span")
  let newbotão = document.createElement("button")
  newbotão.innerHTML = "x"
  newbotão.classList.add("botãodelet")
  li.appendChild(newtarefa)
  li.appendChild(newspanbotão)
  newspanbotão.appendChild(newbotão)
  return li

}







