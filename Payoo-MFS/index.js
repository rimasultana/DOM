// from submit reloadin page

// Step-1
/* document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //   step-2
    event.preventDefault();
    // step-3
    const phoneNumber = document.getElementById("phone-number").value;

    const pinNumber = document.getElementById("pin-number").value;
     // step-4
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("You are logged in");
    }
    // step
    else{
      console.log("Wrong phone or pin number");
    }
  }); */
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);
    // bad way to validate

    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are login");
      window.location.href = 'home.html';
    }else{
      alert('wromg phone number or pin');
    }
  });
