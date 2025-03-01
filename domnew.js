document.getElementById("CLickMEbutton").addEventListener("click", function () {
  alert("chai");
});

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You clicked on a tea item" + event.target.textContent);
  }
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedBack}`;
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "dom fully loaded";
});

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("descriptionText");
    text.classList.toggle("highlight");
  });
