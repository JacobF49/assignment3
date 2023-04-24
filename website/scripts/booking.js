var dayButtons = document.querySelectorAll(".day-selector li");
var fullDayButton = document.getElementById("full");
var halfDayButton = document.getElementById("half");
var clearButton = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");

var dailyRate = 35;
var numFullDays = 0;
var numHalfDays = 0;

dayButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      if (button.id === "monday" || button.id === "tuesday" || button.id === "wednesday" || button.id === "thursday" || button.id === "friday") {
        numFullDays++;
      } else {
        numHalfDays++;
      }
      var totalCost = (dailyRate * numFullDays) + (dailyRate / 2 * numHalfDays);
      calculatedCost.innerHTML = totalCost.toFixed(2);
    }
  });
});

clearButton.addEventListener("click", function() {
  dayButtons.forEach(function(button) {
    button.classList.remove("clicked");
  });
  numFullDays = 0;
  numHalfDays = 0;
  calculatedCost.innerHTML = "0.00";
});

fullDayButton.addEventListener("click", function() {
  if (!fullDayButton.classList.contains("clicked")) {
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    dailyRate = 35;
    var totalCost = (dailyRate * numFullDays) + (dailyRate / 2 * numHalfDays);
    calculatedCost.innerHTML = totalCost.toFixed(2);
  }
});

halfDayButton.addEventListener("click", function() {
  if (!halfDayButton.classList.contains("clicked")) {
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    dailyRate = 20;
    var totalCost = (dailyRate * numFullDays) + (dailyRate / 2 * numHalfDays);
    calculatedCost.innerHTML = totalCost.toFixed(2);
  }
});
