// *Reusable Functions

//   *Toggling section
function toggleSwitching(section, btn) {
  // *Donation
  document.getElementById("donation-section").classList.add("hidden");
  document
    .getElementById("donation-btn")
    .classList.remove("bg-green-500", "text-white");
  document.getElementById("donation-btn").classList.add("text-black");
  // *History
  document.getElementById("history-section").classList.add("hidden");
  document
    .getElementById("history-btn")
    .classList.remove("bg-green-500", "text-white");
  document.getElementById("history-btn").classList.add("text-black");

  //   *Toggling switching section show
  document.getElementById(section).classList.remove("hidden");
  document.getElementById(section).classList.add("block");
  //   *Toggling switching active btn
  document.getElementById(btn).classList.add("bg-green-500", "text-white");
}

// *Achieve donation amount
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

// *Transaction history
function transactionHistory(taka, str) {
  const div = document.createElement("div");
  div.classList.add("max-w-3xl", "mx-auto", "py-2");
  div.innerHTML = `
    <div class=" border rounded-xl border-gray-200 w-full px-4 py-5 sm:p-6">
                <!-- *Donation Details -->
                <span class="flex text-lg font-semibold text-black  text-left"> ${taka} Taka is Donated for ${str}, Bangladesh</span>
                <!-- *Donation Date -->
                <p class="font-light">Date : ${new Date()} </p>
            </div>
      `;
  document.getElementById("history-section").appendChild(div);
}
