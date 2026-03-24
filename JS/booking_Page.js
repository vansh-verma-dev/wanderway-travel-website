import { destinations } from "./Data.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("ID:", id);

const selected = destinations.find((item) => item.id == id);

const HeroSection = document.querySelector(".Hero-Section");
const tripdetails = document.querySelector(".trip-details");

let booking_destination = document.querySelector(".booking_destination");

if (!selected) {
  HeroSection.innerHTML = "<h2>Not Found</h2>";
} else {
  HeroSection.innerHTML = `
     <section class="hero-content">
      <h1 class"Tname">${selected.name}</h1>
      <p> ⭐ ${selected.rating}<span>( ${selected.reviews} riviews )</span></p>
    </section>
  `;
  tripdetails.innerHTML = `
 <h1>About This Destination</h1>
      <p>${selected.Destination}</p>
      <h1>Tour Highlights</h1>
      <ul> 
        ${selected.Highlights.map((item) => `<li> <i class="fa-solid fa-check  Highlights "></i> ${item}</li>`).join("")}
      </ul>
      <h1>What's Included</h1>
      <div class="included-card">
        <ul>
          <li> <i class="fa-solid fa-check"></i> Round-trip flights</li>
          <li> <i class="fa-solid fa-check"></i> 4-star hotel accommodation</li>
          <li> <i class="fa-solid fa-check"></i> Daily breakfast</li>
          <li> <i class="fa-solid fa-check"></i> Guided city tours</li>
          <li> <i class="fa-solid fa-check"></i> Museum tickets</li>
          <li> <i class="fa-solid fa-check"></i> Airport transfers</li>
        </ul>
      </div>
      <h1>Popular Activities</h1>
      <ul class ="PopularActivities" >
       ${selected.Activities.map((item) => `<li>${item}</li>`).join("")}
      </ul>
`;
  booking_destination.innerHTML = selected.name;
}

let starDate = document.getElementById("starting-date");
let EndDate = document.getElementById("End-date");
let GuestNum = document.getElementById("GuestNum");
let total = document.getElementById("total");
let Msg = document.querySelector(".alert-input");

let BookingBtn = document.getElementById("addbookingbtn");
let cartvalue = document.getElementById("cartvalue");

let GuestNumInput = document.getElementById("GuestNum");
let bookingName = booking_destination.innerHTML;

//Update Price for input value
let newPrice = 0;  

let myparice = 1299;

GuestNumInput.addEventListener("input", () => {
  let totalTrip = document.querySelector(".Trip_Price");

  newPrice = myparice * GuestNumInput.value;
  totalTrip.innerHTML = newPrice;
});

function ShowMsg() {
  Msg.style.backgroundcolor = "red";
  Msg.style.color = "red";
  Msg.style.opacity = "1";
  total.innerHTML = "pelese filled All value";
}
// nav cart btn value
let count = 0;
BookingBtn.addEventListener("click", () => {
   
  let starDateValue = starDate.value;
  let EndDateValue = starDate.value;
  let GuestNumValue = GuestNum.value;

  console.log(totalTripPrice);
  if (!starDateValue || !EndDateValue || !GuestNumValue) {
    ShowMsg();
  } else {
    count++;
    cartvalue.innerHTML = count;

    let Utrip = {
      bookingName: bookingName,
      startDate: starDateValue,
      EndDate: EndDateValue,
      GuestNum: GuestNumValue,
      price: newPrice,
    };

    let trips = JSON.parse(localStorage.getItem("trips"));

    if (trips === null) {
      trips = [];
    }

    trips.push(Utrip); // ✅ FIXED

    localStorage.setItem("trips", JSON.stringify(trips));

    alert("Trip Added ✅");
  }

  return;
});
