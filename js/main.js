//   *Navigate to blog page for large device
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../faq.html";
});
//   *Navigate to blog page for small device
document.getElementById("blog-btn-sm").addEventListener("click", function () {
  window.location.href = "../faq.html";
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

//   *Donation
//   *Donation card - 1
document
  .getElementById("noakhali-donation")
  .addEventListener("click", function (event) {
    //   *Preventing default loading
    event.preventDefault();
    //   *Receiving donation amount
    const donatedMoney = donationAmount("noakhali-amount");
    //   *Checking donation amount validation result
    if (typeof donatedMoney === "undefined") {
      return;
    }
    //   *Available balance
    const accountMoney = accountBalance();
    //   *Previous donation balance
    const donationMoney = donationBalance("noakhali-donation-amount");
    //   *Donation validity check
    if (donatedMoney > accountMoney) {
      alert("alert");
      return;
    }
    //   *New balance
    const newAccountBalance = accountMoney - donatedMoney;
    //   *New donation balance
    const newDonationBalance = donationMoney + donatedMoney;
    //   *Show updated balance
    //   *Updated balance amount
    document.getElementById("account-balance-lg").innerText = newAccountBalance;
    document.getElementById("account-balance-sm").innerText = newAccountBalance;
    //   *Updated Noakhali donation amount
    document.getElementById("noakhali-donation-amount").innerText =
      newDonationBalance;
    //   *Clearing input field
    document.getElementById("noakhali-amount").value = "";

    //   *Add the donation in transaction history
    transactionHistory(donatedMoney, "Flood Relief in Noakhali");
  });
//   *Donation card - 2
document
  .getElementById("feni-donation")
  .addEventListener("click", function (event) {
    //   *Preventing default loading
    event.preventDefault();
    //   *Receiving donation amount
    const donatedMoney = donationAmount("feni-amount");
    //   *Checking donation amount validation result
    if (typeof donatedMoney === "undefined") {
      return;
    }
    //   *Available balance
    const accountMoney = accountBalance();
    //   *Previous donation balance
    const donationMoney = donationBalance("feni-donation-amount");
    //   *Donation validity check
    if (donatedMoney > accountMoney) {
      alert("alert");
      return;
    }
    //*New balance
    const newAccountBalance = accountMoney - donatedMoney;
    //   *New donation balance
    const newDonationBalance = donationMoney + donatedMoney;
    //   *Show updated balance
    //   *Updated balance amount
    document.getElementById("account-balance-lg").innerText = newAccountBalance;
    document.getElementById("account-balance-sm").innerText = newAccountBalance;
    //   *Updated Feni donation amount
    document.getElementById("feni-donation-amount").innerText =
      newDonationBalance;
    //   *Clearing input field
    document.getElementById("feni-amount").value = "";
    //   *Add the donation in transaction history
    transactionHistory(donatedMoney, "Flood Relief in Feni");
  });

//   *Donation card - 3
document
  .getElementById("quota-donation")
  .addEventListener("click", function (event) {
    //   *Preventing default loading
    event.preventDefault();
    //   *Receiving donation amount
    const donatedMoney = donationAmount("quota-amount");
    //   *Checking donation amount validation result
    if (typeof donatedMoney === "undefined") {
      return;
    }
    //   *Available balance
    const accountMoney = accountBalance();
    //   *Previous donation balance
    const donationMoney = donationBalance("quota-donation-amount");
    //   *Donation validity check
    if (donatedMoney > accountMoney) {
      alert("alert");
      return;
    }
    //*New balance
    const newAccountBalance = accountMoney - donatedMoney;
    //   *New donation balance
    const newDonationBalance = donationMoney + donatedMoney;
    //   *Show updated balance
    //   *Updated balance amount
    document.getElementById("account-balance-lg").innerText = newAccountBalance;
    document.getElementById("account-balance-sm").innerText = newAccountBalance;
    //   *Updated Quota donation amount
    document.getElementById("quota-donation-amount").innerText =
      newDonationBalance;
    //   *Clearing input field
    document.getElementById("quota-amount").value = "";
    //   *Add the donation in transaction history
    transactionHistory(donatedMoney, "Injured in the Quota Movement");
  });
