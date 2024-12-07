//   *Toggling section
function toggleSwitching(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  //   *Toggling section show
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("block");
}

//*Achieve donation amount
function donationAmount(id) {
  const donateMoney = parseFloat(document.getElementById(id).value);
  //   *Input Validation
  if (
    typeof donateMoney !== "number" ||
    isNaN(donateMoney) ||
    donateMoney < 0
  ) {
    alert("alert");
    return;
  }
  return donateMoney;
  // console.log(donateMoney);
}

//   *Achieve account balance
function accountBalance() {
  const availableBalance = parseFloat(
    document.getElementById("account-balance-lg").innerText
  );
  return availableBalance;
  //   console.log(balanceMoney);
}

//   *Achieve donation balance
function donationBalance(id) {
  const balance = parseFloat(document.getElementById(id).innerText);
  return balance;
}
