// *Navigate to blog page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../faq.html";
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
