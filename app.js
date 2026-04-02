const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const counter = document.getElementById("taskCounter");

// 📦 Obtener tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔁 Render inicial
renderAll();
updateCounter();

// ➕ Agregar tarea
button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  const task = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderAll();
  updateCounter();

  input.value = "";
});

// 💾 Guardar
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🔁 Renderizar
function renderAll(filtered = tasks) {
  list.innerHTML = "";

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // ✔ Completar
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderAll();
      updateCounter();
    });

    // ❌ Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderAll();
      updateCounter();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// 🔍 Filtros
function filterTasks(type) {
  if (type === "all") {
    renderAll(tasks);
  }

  if (type === "completed") {
    renderAll(tasks.filter(t => t.completed));
  }

  if (type === "pending") {
    renderAll(tasks.filter(t => !t.completed));
  }
}

// 🔢 Contador (INNOVACIÓN)
function updateCounter() {
  const pending = tasks.filter(t => !t.completed).length;
  counter.innerText = `${pending} tareas pendientes`;
}