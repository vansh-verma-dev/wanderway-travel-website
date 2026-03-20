import { destinations } from "./Data.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("ID:", id);

const selected = destinations.find((item) => item.id == id);

const HeroSection = document.querySelector(".Hero-Section");
const tripdetails = document.querySelector(".trip-details");

if (!selected) {
  HeroSection.innerHTML = "<h2>Not Found</h2>";
} else {
  HeroSection.innerHTML = `
     <section class="hero-content">
      <h1>${selected.name}</h1>
      <p> ⭐ ${selected.rating}<span>( ${selected.reviews} riviews )</span></p>
    </section>
  `;
  tripdetails.innerHTML = `
 <h1>About This Destination</h1>
      <p>${selected.Destination}</p>
      <h1>Tour Highlights</h1>
      <ul> 
        ${selected.Highlights.map(item => `<li> <i class="fa-solid fa-check  Highlights "></i> ${item}</li>`).join("")}
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
       ${selected.Activities.map(item => `<li>${item}</li>`).join("")}
      </ul>
`;
}
