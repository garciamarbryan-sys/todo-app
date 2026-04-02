const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  const li = document.createElement("li");
  li.innerText = text;

  // ✅ MARCAR COMO COMPLETADA
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // ❌ BOTÓN ELIMINAR
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflicto con click del li
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});