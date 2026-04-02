const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// 📦 Obtener tareas guardadas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔁 Mostrar tareas al cargar
tasks.forEach(task => {
  renderTask(task.text, task.completed);
});

// ➕ Agregar tarea
button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  const task = {
    text: text,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTask(task.text, task.completed);

  input.value = "";
});

// 💾 Guardar
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🧩 Renderizar tarea
function renderTask(text, completed) {
  const li = document.createElement("li");
  li.innerText = text;

  if (completed) {
    li.classList.add("completed");
  }

  // Completar tarea
  li.addEventListener("click", () => {
    li.classList.toggle("completed");

    const index = tasks.findIndex(t => t.text === text);
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
  });

  // Eliminar tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    list.removeChild(li);
    tasks = tasks.filter(t => t.text !== text);
    saveTasks();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}