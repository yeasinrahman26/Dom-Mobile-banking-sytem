document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerHTML;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber - cashOutNumber;
      document.getElementById("account-balance").innerHTML = newBalance;
    } else {
      alert("something is wrong try again");
    }
  });
