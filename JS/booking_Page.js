// ✅ SAME DATA yaha bhi hona zaroori hai
const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description: "The City of Light awaits with its iconic landmarks",
    price: 1299,
    rating: 4.9,
    reviews: "2.5k",
    image:
      "https://i.pinimg.com/1200x/cc/94/27/cc9427434fb5eebca69a5bcc53b3eada.jpg",
    Destination:
      "Paris is one of the most beautiful and romantic cities in the world.",
    Highlights: [
      "Explore the Louvre Museum",
      "Visit the Eiffel Tower",
      "Seine River Cruise",
    ],
    Activities: ["Photography", "Food tour"],
  },

  {
    id: 2,
    name: "Maldives",
    description: "Paradise islands with crystal clear waters",
    price: 999,
    rating: 4.8,
    reviews: "1.8k",
    image:
      "https://i.pinimg.com/736x/92/b1/79/92b1791393625bbb8f4d16d9a64c7873.jpg",
  },

  {
    id: 3,
    name: "Dubai, UAE",
    description: "Experience luxury and modern marvels",
    price: 1499,
    rating: 4.7,
    reviews: "3.1k",
    image:
      "https://i.pinimg.com/1200x/65/03/d7/6503d7a41d906f52f99e609dafc32d49.jpg",
    Destination: "Dubai is a modern luxury city.",
    Highlights: ["Burj Khalifa", "Desert Safari"],
    Activities: ["Skydiving", "Shopping"],
  },
];

// ✅ URL se ID nikaalo
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// ✅ Matching data find karo
const selectedPlace = destinations.find((item) => item.id == id);

// ✅ Container select karo
const container = document.querySelector(".details-container");

// ❌ Agar data nahi mila to error message
if (!selectedPlace) {
  container.innerHTML = "<h1>Data not found ❌</h1>";
}

// ✅ Highlights list
const highlightsHTML = selectedPlace?.Highlights
  ?.map(item => `<li>${item}</li>`)
  .join("");

// ✅ Activities list
const activitiesHTML = selectedPlace?.Activities
  ?.map(item => `<li>${item}</li>`)
  .join("");

// ✅ Final render
if (selectedPlace && container) {
  container.innerHTML = `
    <section class="hero-section">
      <h1>${selectedPlace.name}</h1>
      <p>${selectedPlace.description}</p>
      <img src="${selectedPlace.image}" width="100%">
    </section>

    <section class="Main-details">
      <div class="trip-info-section">

        <h2>About</h2>
        <p>${selectedPlace.Destination || "No details available"}</p>

        <h2>Highlights</h2>
        <ul>${highlightsHTML || "<li>No highlights</li>"}</ul>

        <h2>Activities</h2>
        <ul>${activitiesHTML || "<li>No activities</li>"}</ul>

        <h2>Price: ₹${selectedPlace.price}</h2>

      </div>
    </section>
  `;
}