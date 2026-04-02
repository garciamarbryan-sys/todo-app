const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// 📦 Obtener tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 🔁 Render inicial
renderAll();

// ➕ Agregar tarea
button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  const task = {
    id: Date.now(), // 🔥 evita errores por texto repetido
    text: text,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderAll();

  input.value = "";
});

// 💾 Guardar
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 🔁 Renderizar TODAS
function renderAll(filtered = tasks) {
  list.innerHTML = "";

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // ✅ Toggle completar
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderAll();
    });

    // ❌ Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderAll();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// 🔍 FILTROS
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