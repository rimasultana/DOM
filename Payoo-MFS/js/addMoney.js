document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "1234") {
      const balance = document.getElementById("balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newMoney = balanceNumber + addMoneyNumber;
      document.getElementById("balance").innerText = newMoney;
    } else {
      alert("Failed to add money! please try again");
    }
  });
