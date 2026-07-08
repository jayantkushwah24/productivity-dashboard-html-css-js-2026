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

// pomodoro
toggleBtwDashboardAndFeatures(
  "#dashboard-pomodoro-timer",
  "#pomodoro-div",
  "#pomodoro-back-btn",
);

//   "#dashboard-weather-widget",
//   "#dashboard-time-date-display",
// const dashboardDailyGoals = document.querySelector("#dashboard-daily-goals");
