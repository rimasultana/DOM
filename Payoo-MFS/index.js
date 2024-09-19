// from submit reloadin page

// Step-1
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //   step-2
    event.preventDefault();
    // step-3
    const phoneNumber = document.getElementById('phone-number').value;

    console.log(phoneNumber);
  });
