import { destinations } from "./Data.js";

const container = document.querySelector(".destination-contain");

// cards render
destinations.forEach((place) => {
  container.innerHTML += `
  <div class="destination-card">

    <img src="${place.image}">

    <h1><i class="fa-solid fa-location-dot"></i> ${place.name}</h1>

    <p>${place.description}</p>

    <div class="card-group">

      <h2>
        ⭐ ${place.rating} 
        <span>(${place.reviews} reviews)</span>
      </h2>

      <button onclick="goToPage(${place.id})">View More</button>

    </div>

    <div class="rupees">${place.price} Rs</div>

  </div>
  `;
});


// button click function
function goToPage(id) {
  window.location.href = `booking_page.html?id=${id}`;
}

 
window.goToPage = goToPage;