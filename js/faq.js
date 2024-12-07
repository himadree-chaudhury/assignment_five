//   *Navigate to landing page
document.getElementById("landing-page").addEventListener("click", function () {
  window.location.href = "../index.html";
});

//   *Donation & History btn toggle switching

//   *Donation btn toggle
document.getElementById("donation-btn").addEventListener("click", function () {
  toggleSwitching("donation-section");
  document.getElementById("faq-section").classList.add("hidden");
});

//   *History btn toggle
document.getElementById("history-btn").addEventListener("click", function () {
  toggleSwitching("history-section");
  document.getElementById("faq-section").classList.add("hidden");
});

//   *Blog btn toggling
document.getElementById("blog-btn").addEventListener("click", function () {
  document.getElementById("faq-section").classList.remove("hidden");
});
