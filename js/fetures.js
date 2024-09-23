// show the cash out form
document.getElementById("btn-show-cash-out")
.addEventListener('click',function(){

    //show cash out btn click
   document.getElementById("cash-out-form").classList.remove("hidden");
   document.getElementById("add-money-form").classList.add("hidden");
})

// show the add money form

document.getElementById("btn-show-add-money")
.addEventListener('click',function(){

    // show add money btn click 
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
})