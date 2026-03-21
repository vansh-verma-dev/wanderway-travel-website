let BookingBtn = document.getElementById("addbookingbtn");
let alertInput = document.querySelector(".alert-input");

let startDate = document.getElementById("starting-date");
let EndDate = document.getElementById("End-date");
let GuestNum = document.getElementById("GuestNum");
let totalRs = document.getElementById('total')

let mynum = "1";
let price = "1299"; 
console.log(price);

let totalPrice = mynum  * price;
totalRs.innerHTML = totalPrice

BookingBtn.addEventListener("click", () => {
  if (startDate.value === "" || EndDate.value === "" || GuestNum.value === "") {
    alertInput.innerHTML = "pelase Enter a full details";
    alertInput.style.opacity = "1";
    alertInput.style.color = "red";

    setTimeout(() => {
      alertInput.style.opacity = "0";
    }, 2000);
  } else {
    alertInput.innerHTML = "Trip Book Succesfull";
    alertInput.style.opacity = "1";
    alertInput.style.color = "white";
    alertInput.style.backgroundColor = "green";

    setTimeout(() => {
      alertInput.style.opacity = "0";
    }, 2000);
  }
});
