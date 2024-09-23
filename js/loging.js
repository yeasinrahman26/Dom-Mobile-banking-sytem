// form submit reloading the page

// step - 1 set event handler
// document
//   .getElementById("button-login")

//   .addEventListener("click", function (event) {

//     // step-2 : prevent default behavior (prevent reloading browser for form tag)
//     event.preventDefault(); // <-------- vejal to beginners

//     // step -3: get the phone number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber, pinNumber);
    
//     // step 4- validate phone and pin
//     // this is temporary. you should not do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//       console.log('you are log in');
//     }
//     else{
//       alert('wrong phone number or pin')
//     }


//   });

document.getElementById('button-login')
.addEventListener('click', function (event){
  event.preventDefault();
 

  //get phone number and pin
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber= document.getElementById('pin-number').value;
  

  // bad way to validate
  if(phoneNumber === '5' && pinNumber === '1234'){
    window.location.href ='/home.html'
  }
  else{
    alert('wrong pin or phone number');
  }




})


