// *Toggling section
function toggleSwitching(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  // *Toggling section show
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("block");
}

// *Achieve account balance
function accountBalance() {
  const balance = parseFloat(
    document.getElementById("account-balance-lg").innerText
  );
  return balance;
  //   console.log(balanceMoney);
}

//*Achieve donation amount
function donationAmount(id) {
  const donateMoney = parseFloat(document.getElementById(id).value);
  return donateMoney;
  // console.log(donateMoney);
}
