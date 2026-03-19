 
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
      "Paris, the capital of France, is one of the most beautiful and romantic cities in the world. Known for its stunning architecture, world-class museums, exquisite cuisine, and charming streets, Paris offers an unforgettable experience for every traveler.",
    Highlights: [
      "Explore the Louvre Museum",
      "Visit the iconic Eiffel Tower",
      "Champs-Élysées shopping",
      "Seine River Cruise",
      "Montmartre and Sacré-Cœur",
    ],
    Activities: [
      "Wine tasting in local cafes",
      "Photography tour",
      "French cooking class",
      "Night illumination tour",
    ],
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

    button: "2",
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
    Destination:
      "Dubai is a glittering metropolis that seamlessly blends traditional Arabian culture with ultra-modern luxury. From the world's tallest building to man-made islands, Dubai offers spectacular experiences",
    Highlights: [
      "Burj Khalifa observation deck",
      "Dubai Mall shopping",
      "Desert safari with BBQ dinner",
      "Palm Jumeirah tour",
      "Dubai Marina cruise",
    ],
    Activities: [
      "Skydiving",
      "Dune bashing",
      "Indoor skiing",
      "Yacht rental",
      "Gold Souk shopping",
    ],
  },

  {
    id: 4,
    name: "Switzerland",
    description: "Alpine beauty and scenic landscapes",
    price: 1299,
    rating: 4.9,
    reviews: "2.5k",
    image:
      "https://i.pinimg.com/1200x/f8/03/da/f803dadd95596c8a94048bf6b08ae03b.jpg",
  },

  {
    id: 5,
    name: "Tokyo, Japan",
    description: "Blend of tradition and futuristic innovation",
    price: 999,
    rating: 4.8,
    reviews: "1.8k",
    image:
      "https://i.pinimg.com/1200x/99/a5/f2/99a5f20fdee57e12010f055840eda500.jpg",
  },

  {
    id: 6,
    name: "Santorini, Greece",
    description: "Stunning sunsets and white-washed buildings",
    price: 1499,
    rating: 4.7,
    reviews: "3.1k",
    image:
      "https://i.pinimg.com/1200x/12/e0/c6/12e0c6c92da1b4d4c1dec82fed0e41d5.jpg",
  },
];

const Cardcontainer = document.querySelector(".destination-contain");

destinations.forEach((place) => {
  Cardcontainer.innerHTML += `
<div class="destination-card">

<img src="${place.image}">

<h1>${place.name}</h1>

<p>${place.description}</p>

<div class="card-group">

<h2>⭐ ${place.rating} <span>(${place.reviews} reviews)</span></h2>

<button onclick="goToPage(${place.id})">View More</button>

</div>

<div class="rupees">${place.price} Rs</div>
</div>
`;
});

function goToPage(id) {
  window.location.href = `booking_page.html?id=${id}`;
}
