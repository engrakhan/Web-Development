document.getElementById("addBtn").addEventListener("click", function () {
  const todoText = document.getElementById("todo").value;
  if (todoText === "") return;

  const todoList = document.querySelector(".todoList");
  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");

  const todoSpan = document.createElement("span");
  todoSpan.classList.add("text");
  todoSpan.textContent = todoText;
  todoItem.appendChild(todoSpan);

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "✔";
  checkBtn.classList.add("checkBtn");
  checkBtn.addEventListener("click", function () {
    todoItem.classList.toggle("checked");
  });
  todoItem.appendChild(checkBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "📝";
  editBtn.classList.add("editBtn");
  editBtn.addEventListener("click", function () {
    const newTodoText = prompt("Edit to:", todoSpan.textContent);
    if (newTodoText !== null && newTodoText !== "") {
      todoSpan.textContent = newTodoText;
    }
  });
  todoItem.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(todoItem);
  });
  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);

  document.getElementById("todo").value = "";
});
