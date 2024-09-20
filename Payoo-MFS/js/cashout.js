document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cahsOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cahsOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(cahsOut, pinNumber);
    // wrong way to varify pin number
    if (pinNumber === "1234") {
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newbalance = balanceNumber - cashOutNumber;
        console.log(newbalance);


        document.getElementById('balance').innerText = newbalance;
    }else{
        alert('Failed to cash Out! Please try again');
    }
  });
