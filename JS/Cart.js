// container select karo
let Trip_Collection = document.querySelector('.trip_collect');

// function to load data
function showTrips() {
  let trips = JSON.parse(localStorage.getItem("trips")) || [];

  // console check
  console.log(trips);

  // clear old data
  Trip_Collection.innerHTML = "";

  // agar koi trip nahi hai
  if (trips.length === 0) {
    Trip_Collection.innerHTML = `<a href="index.html#Destination"><button>Explore</button>
        </a>`;
    return;
  }

  // loop chalao
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

            <div class="trip_btn_group">
                <button class="confrmBtn">Confirm Booking</button>
                <button class="delete_btn">Cancel Trip</button>
                <button class="RemoveBtn" onclick="deleteTrip(${index})">
                  Remove
                </button>
            </div>

        </div>
    </div>
    `;
  });
}

// delete function
function deleteTrip(index) {
  let trips = JSON.parse(localStorage.getItem("trips")) || [];

  trips.splice(index, 1);

  localStorage.setItem("trips", JSON.stringify(trips));

  showTrips(); 
}

// page load pe run
window.onload = showTrips;