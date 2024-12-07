//   *Navigate to landing page
document.getElementById("landing-page").addEventListener("click", function () {
  window.location.href = "../index.html";
});

//   *Donation & History btn toggle switching

//   *Donation btn toggle
document.getElementById("donation-btn").addEventListener("click", function () {
  toggleSwitching("donation-section", "donation-btn");
});

//   *History btn toggle
document.getElementById("history-btn").addEventListener("click", function () {
  toggleSwitching("history-section", "history-btn");
});

//   *Blog btn toggling
document.getElementById("blog-btn").addEventListener("click", function () {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("faq-section").classList.remove("hidden");
  document.getElementById("faq-section").classList.add("block");
});
