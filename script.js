export function getTodoListTasks() {
  const result = JSON.parse(localStorage.getItem("todo-list-tasks")) || [];
  return result;
}
