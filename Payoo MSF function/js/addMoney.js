document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFildValueById("input-add-money");
    const pinNumber = getInputFildValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("failed to add money");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getInputInnerById("balance");

      const newBalance = balance + addMoney;
      document.getElementById("balance").innerText = newBalance;

      const p = document.createElement("p");
      p.innerText = `
       Added:${addMoney} TK. Balance: ${newBalance}`;
      console.log("p element:", p);
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Wrong pin Number! Please try again");
    }
  });
