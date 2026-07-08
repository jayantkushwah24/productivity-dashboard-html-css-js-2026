export function getTodoListTasks() {
  const result = JSON.parse(localStorage.getItem("todo-list-tasks")) || [];
  return result;
}

export function getPlannerTableTask() {
  let plannerTableTask =
    JSON.parse(localStorage.getItem("planner-task-table")) || [];
  return plannerTableTask;
}
