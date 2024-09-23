/**
 * 1. add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 
 * 2. get the money user wants to add also, get the pin number provided
 * 
 * 3.verify the pin number.for, wrong pin number ==> failed to add
 * for right pin number. allow to add the number to the account balance
 * 
 * 4.get the current balance
 * 
 * 5.add money to be added with the current balance
 * 
 * 6.display/update the balance in the DOM/Ui
 * 
 */

document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    
    
    // get money and the pin number
    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById("input-pin-number").value;
    
    if(pinNumber === '1234'){
        // add money to the account
        const balance = document.getElementById("account-balance").innerHTML;
        const balanceNumber = parseFloat(balance)

        // new balance 

        const newBalance = balanceNumber + addMoneyNumber
        console.log(newBalance);

        // update the dom with updated balance
        document.getElementById("account-balance").innerText = newBalance;
    }
    else{
        alert('Failed to add money try again')
    }

})