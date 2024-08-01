let todos = []; // Store todo items

const form = document.querySelector("form");

const todo = document.querySelector("#todo");

const todosContainer = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Store our todo in a todos array
  todos.push(todo.value); // ["one", "two", "three", "four"]

  localStorage.setItem("todos", JSON.stringify(todos));
  /// ["one", "two", "three"] - gets cleared and new value of todos - ["one", "two", "three", "four"]

  // Render the todo
  renderTodo(todo.value);
});

function renderTodo(todo) {
  const li = document.createElement("li");
  li.classList.add("todo-group");

  const p = document.createElement("p");
  p.innerText = todo;

  li.appendChild(p);

  btn = document.createElement("button");
  btn.innerText = "Delete";

  btn.addEventListener("click", () => {
    li.remove(); // Remove it from DOM

    // Remove item from array
    index = todos.indexOf(todo);
    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    console.log(todos);
  });

  li.appendChild(btn);
  todosContainer.appendChild(li);
  console.log(todos);
}

function renderTodos() {
  let fetchedTodos = JSON.parse(localStorage.getItem("todos")); // get from local storage

  if (fetchedTodos == null) {
    return;
  }

  todos.push(...fetchedTodos); // todos.push("one", "two", "three")

  fetchedTodos.map((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-group");

    const p = document.createElement("p");
    p.innerText = todo;

    li.appendChild(p);

    btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.addEventListener("click", () => {
      li.remove(); // Remove it from DOM

      // Remove item from array
      index = todos.indexOf(todo);
      todos.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(todos));

      console.log(todos);
    });

    li.appendChild(btn);

    todosContainer.appendChild(li);
  });
  console.log(todos);
}

renderTodos();
