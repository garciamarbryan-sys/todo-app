// 🧪 FUNCIONES

function addTask(tasks, text) {
  if (!text || text.trim() === "") return tasks;
  tasks.push({ text, completed: false });
  return tasks;
}

function deleteTask(tasks, index) {
  if (index < 0 || index >= tasks.length) return tasks;
  tasks.splice(index, 1);
  return tasks;
}

function toggleTask(tasks, index) {
  if (index < 0 || index >= tasks.length) return tasks;
  tasks[index].completed = !tasks[index].completed;
  return tasks;
}

// 🧪 TESTS

function testAddTask() {
  let tasks = [];

  tasks = addTask(tasks, "Estudiar");

  if (tasks.length === 1 && tasks[0].text === "Estudiar") {
    console.log("✅ addTask PASÓ");
  } else {
    console.log("❌ addTask FALLÓ");
  }

  // Test extra (vacío)
  tasks = addTask(tasks, "");
  if (tasks.length === 1) {
    console.log("✅ addTask vacío PASÓ");
  } else {
    console.log("❌ addTask vacío FALLÓ");
  }
}

function testDeleteTask() {
  let tasks = [{ text: "A" }, { text: "B" }];

  tasks = deleteTask(tasks, 0);

  if (tasks.length === 1 && tasks[0].text === "B") {
    console.log("✅ deleteTask PASÓ");
  } else {
    console.log("❌ deleteTask FALLÓ");
  }

  // Test índice inválido
  tasks = deleteTask(tasks, 5);
  if (tasks.length === 1) {
    console.log("✅ deleteTask inválido PASÓ");
  } else {
    console.log("❌ deleteTask inválido FALLÓ");
  }
}

function testToggleTask() {
  let tasks = [{ text: "A", completed: false }];

  tasks = toggleTask(tasks, 0);

  if (tasks[0].completed === true) {
    console.log("✅ toggleTask PASÓ");
  } else {
    console.log("❌ toggleTask FALLÓ");
  }

  // Test índice inválido
  tasks = toggleTask(tasks, 5);
  if (tasks[0].completed === true) {
    console.log("✅ toggleTask inválido PASÓ");
  } else {
    console.log("❌ toggleTask inválido FALLÓ");
  }
}

// ▶️ EJECUTAR TESTS
testAddTask();
testDeleteTask();
testToggleTask();