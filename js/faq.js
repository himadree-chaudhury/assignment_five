document.getElementById("landing-page").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// *Donation & History btn toggle switching

// *Donation btn toggle
document.getElementById("donation-btn").addEventListener("click", function () {
  toggleSwitching("donation-section");
});

//   *History btn toggle
document.getElementById("history-btn").addEventListener("click", function () {
  toggleSwitching("history-section");
});
