let Button = document.getElementById('getData');
let Trip_Collection = document.querySelector('.Trip_Collection');
 
  let data = localStorage.getItem("TripDetails");
  let dataget = JSON.parse(data);
  console.log(dataget);
 

Trip_Collection.innerHTML += `
  <div class="trip_bill">
                <h1 id="destination_name">Dubai</h1>
                <div class="trip_details">
                    <div class="trip_details_card">
                        <p>Travel Dates</p>
                        <p>${dataget.startDate} - ${dataget.EndDate}</p>
                    </div>

                    <div class="trip_details_card">
                        <p>Guests</p>
                        <h2>${dataget.GuestNum}People</h2>
                    </div>

                    <div class="trip_details_card">
                        <p>Total Price</p>
                        <h2>$1799</h2>
                    </div>

                    <div class="trip_btn_group">
                        <button class="confrmBtn"> <i class="fa-solid fa-check "></i> conferma Booking</button>
                        <button class="delete_btn"><i class="fa-regular fa-circle-xmark"></i> Cancel Trip</button>
                        <button class="RemoveBtn"> <i class="fa-solid fa-trash"></i>Remove</button>
                    </div>
                </div>
            </div>
`

