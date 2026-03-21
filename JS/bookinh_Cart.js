let BookingBtn = document.getElementById("addbookingbtn");
let alertInput = document.querySelector(".alert-input");
let cartvalue = document.getElementById("cartvalue");

let startDate = document.getElementById("starting-date");
let EndDate = document.getElementById("End-date");
let GuestNum = document.getElementById("GuestNum");
let totalRs = document.getElementById("total");


// Calaculation Trip Price For per Perna
let price = "1299";
GuestNum.addEventListener("input", () => {

  let NumValue = GuestNum.value;
  let totalPrice = price * NumValue;
  totalRs.innerHTML = totalPrice;
});

// Show Warnning meassage
function warnning() {
  alertInput.style.opacity = "1";
  alertInput.style.color = "black";
  alertInput.style.backgroundColor = "rgba(255, 0, 0, 0.521)";
}
// show succes masg
function succesmsg() {
  alertInput.innerHTML = "Trip Book Succesfull";
  alertInput.style.opacity = "1";
  alertInput.style.color = "white";
  alertInput.style.backgroundColor = "green";
}

let cartNum = "0";

// details condition
BookingBtn.addEventListener("click", () => {
  if (startDate.value === "" || EndDate.value === "" || GuestNum.value === "") {
    alertInput.innerHTML = ` <i class="fa-solid fa-circle-exclamation"></i> pelase Enter a full details`;
    //show msg
    warnning();
// hide msg after 2sec
    setTimeout(() => {
      alertInput.style.opacity = "0";
    }, 2000);

  } else {

    // show succes msg
    succesmsg();
    cartvalue.style.opacity = "1";
    cartNum++;
    cartvalue.innerHTML = cartNum;
    setTimeout(() => {
      alertInput.style.opacity = "0";
    }, 2000);
    return;
  }
});
