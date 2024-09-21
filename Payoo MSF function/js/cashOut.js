document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashout = getInputFildValueById("input-cash-out");
    const pinNumber = getInputFildValueById("input-cash-out-pin");

    if (isNaN(cashout)) {
      alert("failed to add money");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getInputInnerById("balance");
      if (cashout > balance) {
        alert("You do not have enough money to cash out");
        return;
      }

      const newMoney = balance - cashout;
      document.getElementById("balance").innerText = newMoney;

      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
     <h4>Cash Out</h4>
     <p>${cashout} withdraw. New Balance ${newMoney}</p>
     `;
      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("wrong!!! Please try again!");
    }
  });
