const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDo();
}
 
function paintTodo(newTodo){
    const todoLi = document.createElement("li");
    todoLi.id = newTodo.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(button);
    todoList.appendChild(todoLi);
}

function submitTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDo();
}

todoForm.addEventListener("submit",submitTodo);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
