// container select karo
let Trip_Collection = document.querySelector('.trip_collect');
 
// function to load data
function showTrips() {
  let trips = JSON.parse(localStorage.getItem("trips")) || [];
 
  // agar koi trip nahi hai to ye wala data loard hoga
  if (trips.length === 0) {
    Trip_Collection.innerHTML = ` 
      <div class="cart_content">
        <span class="icon">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <h2>Your Cart is Empty</h2>
          <p>Start adding destinations to plan your perfect trip!</p>
          <a href="index.html">
            <button>
              Explore Destinations<i
                class="fa-solid fa-arrow-right"
              ></i></button
          ></a>
        </span>
      </div>
    `;
    return;
  }else{  
 
  trips.forEach((trip, index) => {
    Trip_Collection.innerHTML += `
    <div class="trip_bill">
        <h1>${trip.bookingName}</h1>

        <div class="trip_details">

            <div class="trip_details_card">
                <p>Travel Dates</p>
                <p>${trip.startDate} - ${trip.EndDate}</p>
            </div>

            <div class="trip_details_card">
                <p>Guests</p>
                <h2>${trip.GuestNum} <span>People</span></h2>
            </div>

            <div class="trip_details_card pricetag">
                <p>Total Price</p>
                <h2  >₹${trip.price || "N/A"}</h2>
            </div>

        </div>
          <div class="trip_btn_group">
                <button class="confrmBtn">Confirm Booking</button>
                <button class="delete_btn">Cancel Trip</button>
                <button class="RemoveBtn" onclick="deleteTrip(${index})">
                  Remove
                </button>
            </div>
    </div>
    `;
  });
}
}

// delete function
function deleteTrip(index) {
  let trips = JSON.parse(localStorage.getItem("trips")) || [];

  trips.splice(index, 1);

  localStorage.setItem("trips", JSON.stringify(trips));

  showTrips(); 
}

// page load  run
window.onload = showTrips;