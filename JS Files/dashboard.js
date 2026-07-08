// dashboard
const dashboardDiv = document.querySelector("#dashboard-div");

// logic of toggling btw dashboard and features
function toggleBtwDashboardAndFeatures(
  dashboardFeatureBtnId,
  featureDivId,
  featureBackBtnId,
) {
  let dashboardFeature = document.querySelector(dashboardFeatureBtnId);
  let featureDiv = document.querySelector(featureDivId);
  let featureBackBtn = document.querySelector(featureBackBtnId);

  dashboardFeature.addEventListener("click", () => {
    featureDiv.style.display = "inline";
    dashboardDiv.style.display = "none";
  });

  featureBackBtn.addEventListener("click", () => {
    featureDiv.style.display = "none";
    dashboardDiv.style.display = "inline";
  });
}

// todo list
toggleBtwDashboardAndFeatures(
  "#dashboard-todo-list",
  "#todo-list-div",
  "#todo-list-back-btn",
);

// daily planner
toggleBtwDashboardAndFeatures(
  "#dashboard-daily-planner",
  "#daily-planner-div",
  "#daily-planner-back-btn",
);

// motivation quote
toggleBtwDashboardAndFeatures(
  "#dashboard-motivation-quote",
  "#motivation-quote-div",
  "#motivation-back-btn",
);

const dashboardWeatherWidget = document.querySelector(
  "#dashboard-weather-widget",
);
const dashboardTimeDateDisplay = document.querySelector(
  "#dashboard-time-date-display",
);
const dashboardDailyGoals = document.querySelector("#dashboard-daily-goals");
const dashboardPomodoroTimer = document.querySelector(
  "#dashboard-pomodoro-timer",
);

// todo list
// const dashboardTodoList = document.querySelector("#dashboard-todo-list");
// const todoListDiv = document.querySelector("#todo-list-div");
// const todoListBackBtn = document.querySelector("#todo-list-back-btn");
// dashboardTodoList.addEventListener("click", () => {
//   todoListDiv.style.display = "inline";
//   dashboardDiv.style.display = "none";
// });
// todoListBackBtn.addEventListener("click", () => {
//   todoListDiv.style.display = "none";
//   dashboardDiv.style.display = "inline";
// });

// daily plannner
// const dashboardDailyPlanner = document.querySelector(
//   "#dashboard-daily-planner",
// );
// const dailyPlannerDiv = document.querySelector("#daily-planner-div");
// const dailyPlannerBackBtn = document.querySelector("#daily-planner-back-btn");
// dashboardDailyPlanner.addEventListener("click", () => {
//   dailyPlannerDiv.style.display = "inline";
//   dashboardDiv.style.display = "none";
// });
// dailyPlannerBackBtn.addEventListener("click", () => {
//   dailyPlannerDiv.style.display = "none";
//   dashboardDiv.style.display = "inline";
// });

// motivation quote
// const dashboardMotivationQuote = document.querySelector(
//   "#dashboard-motivation-quote",
// );
