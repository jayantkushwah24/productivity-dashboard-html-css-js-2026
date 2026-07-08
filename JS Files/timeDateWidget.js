const timeWidget = document.querySelector("#time-widget");
const dateWidget = document.querySelector("#date-widget");
const dayWidget = document.querySelector("#day-widget");

const url = "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata";

async function getTimeDate() {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    timeWidget.innerHTML = `${data.time}:${data.seconds}`;
    dateWidget.innerHTML = data.date;
    dayWidget.innerHTML = data.dayOfWeek;
  } catch (error) {
    console.error(error);
  }
}

setInterval(() => {
  getTimeDate();
}, 1000);
