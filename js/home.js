//add money to the account

// step- 1 add an event handler to the add money button inside the form
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step -2 get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    // console.log(addMoneyInput);


    //get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    // console.log(pinNumberInput);
    
    // step-3 verify the pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');


        // step -4 get the current balance 
        const balance = document.getElementById("account-balance").innerText;
        console.log(balance);

        // step -5 add addmoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceMoneyNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceMoneyNumber ;
        // console.log(newBalance);

        // step - 6 update the balance in the dom 

        document.getElementById("account-balance").innerText = newBalance ;


    }
    else{
        alert('Failed To ADD Money check your pin')
    }



  });
