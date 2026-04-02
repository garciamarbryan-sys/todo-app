const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("No puedes agregar una tarea vacía");
    return;
  }

  // Crear elemento li
  const li = document.createElement("li");
  li.innerText = text;

  // Crear botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  // Evento eliminar
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  // Agregar botón al li
  li.appendChild(deleteBtn);

  // Agregar a lista
  list.appendChild(li);

  // Limpiar input
  input.value = "";
});