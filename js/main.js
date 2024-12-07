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

// *Donation
// *Donation card - 1
document
  .getElementById("noakhali-donation")
  .addEventListener("click", function (event) {
    //   *Preventing default loading
    event.preventDefault();
    // *Checking available balance
    const accountMoney = accountBalance();
    // *Receiving donation amount
    const donatedMoney = donationAmount("noakhali-amount");
    //*New balance
    const newAccountBalance = accountMoney - donatedMoney;
    console.log(accountMoney, donatedMoney, newAccountBalance);
  });
