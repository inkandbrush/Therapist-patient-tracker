
const pageName = document.title || window.location.pathname;
const startTime = Date.now();
const sessionData = JSON.parse(localStorage.getItem("sessionData") || "{}");
const endpoint = "https://api.sheetbest.com/sheets/19c68185-0b92-4700-8cec-453b30385cd1"; // Replace this

window.addEventListener("beforeunload", () => {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  const visitData = {
    ...sessionData,
    page: pageName,
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString()
  };

  navigator.sendBeacon(endpoint, new Blob([JSON.stringify(visitData)], { type: "application/json" }));
});
