// seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm= document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue


//funções

const saveTodo = (text) => {

    // criando uma div embaixo pra ficar as tarefas escritas
    const todo = document.createElement("div")
    todo.classList.add("todo")


    // Titulo da Tarefa
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    //Botões da Tarefa
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()


}



const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
  
    todos.forEach((todo) => {
      let todoTitle = todo.querySelector("h3");
  
      if (todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
  
        
      }
    });
  };



const toggleforms = () => {

   
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}


//Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value


    if(inputValue){
        //save to do
      saveTodo(inputValue)

        
    }
})


document.addEventListener("click", (e) => {

    const target1 = e.target

    const parent1 = target1.closest("div")

    let todoTitle

    if(parent1 && parent1.querySelector("h3")){
        todoTitle = parent1.querySelector("h3").innerText;
    }

    if(target1.classList.contains("finish-todo") || target1.classList.contains("fa-check")){
        parent1.classList.toggle("done")
    }


    if(target1.classList.contains("remove-todo") || target1.classList.contains("fa-xmark")){
        parent1.remove()
    }

    if(target1.classList.contains("edit-todo") || target1.classList.contains("fa-pen")){

        toggleforms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
       
    }

})


cancelEditBtn.addEventListener("click", (e) => {

    e.preventDefault()

    toggleforms()
})


document.addEventListener("submit", (e) => {

    e.preventDefault()

    const editInputValue = editInput.value


    if(editInputValue){
        updateTodo(editInputValue)
    }

        toggleforms()
})