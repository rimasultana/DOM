// add money to the account
document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();
    const addInputMoney = document.getElementById("input-add-money").value;

    const pinInputNumber = document.getElementById("input-pin-number").value;

    if (pinInputNumber === "1234") {
      console.log("adding money to your account");
      const balance = document.getElementById('balance').innerText;

      const addNumberInputMoney = parseFloat(addInputMoney);
      const addNumberbalanceMoney = parseFloat(balance);

    const newMoney =addNumberInputMoney + addNumberbalanceMoney;
       document.getElementById('balance').innerText = newMoney;

    }
    else{
        alert("Faild to add money! please try again")
    }
  });
