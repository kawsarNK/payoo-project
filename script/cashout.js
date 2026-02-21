document.getElementById("cashout-btn").addEventListener("click", function () {
    //1- get the agent number & validate
    const cashoutNumberInput = document.getElementById("CashOut-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if (cashoutNumber.length != 11) {
        alert("Invalid agent number");
        return;
    }
    //2- get the amount , validate, convert to number
    const CashOutAmountInput = document.getElementById("CashOut-amount");
    const CashOutAmount = CashOutAmountInput.value;
    console.log(CashOutAmount);
    //3- get the current balance, validate,convert to Number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    //4- calculate the New balance
    const NewBalance = Number(balance) - Number(CashOutAmount);
    console.log("New Balance ", NewBalance)

    if (NewBalance < 0) {
        alert("Invalid amount");
        return;
    }
    // 5- get pin and verify
    const CashoutPinInput = document.getElementById("CashOut-pin");
    const CashOutPin = CashoutPinInput.value;
    console.log(CashOutPin);
    //5-1 verify
    if (CashOutPin == "1234") {
        alert("Cashout Succesfull");
        balanceElement.innerText = NewBalance;
    }
    else {
        alert("Invalid pin");
        return;
    }
    //5-2 not verify

})