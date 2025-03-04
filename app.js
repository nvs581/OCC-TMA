const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteorCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteorCompleteTodo(e) {
  const targetBtn = e.target;
  if (targetBtn.classList.contains("trash-btn")) {
    const todo = targetBtn.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  if (targetBtn.classList.contains("complete-btn")) {
    const todo = targetBtn.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      todo.style.display = "flex";
    } else if (filterValue === "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filterValue === "uncompleted") {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
