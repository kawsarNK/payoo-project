document.getElementById("login-btn").addEventListener("click", function () {

    // step-1 get the number
    const numberInput = document.getElementById("number-input");
    const contactNumber = numberInput.value;
    // console.log(contactNumber);

    // step-2 get the PIN
    const pinInput = document.getElementById("pin-input");
    const pinNumber = pinInput.value;
    // console.log(pinNumber);

    // step -3 match phn no & pin 

    if (contactNumber == "01830532640" && pinNumber == "1234") {
        alert("log In successfully");
    }
    else {
        alert("Log in failed");
        return;
    }
})