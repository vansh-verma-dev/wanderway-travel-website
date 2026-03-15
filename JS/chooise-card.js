const chooiseCard = [
    {
        "icon": '<i class="fa-solid fa-award"></i>',
        "name" : "Best Price Guarantee",
        "subheading" : "We ensure you get the best deals with our price match guarantee",
        "id": "card-1"   
    },
       {
        "icon": '<i class="fa-solid fa-shield-halved"></i>',
        "name" : "Safe & Secure",
        "subheading" : "Your bookings and payments are protected with advanced security",
        "id": "card-2"   
    },
       {
        "icon": '<i class="fa-solid fa-headphones"></i>',
        "name" : "24/7 Support",
        "subheading" : "Our travel experts are available round the clock to assist you",
        "id": "card-3"   
    },
       {
        "icon": '<i class="fa-solid fa-globe"></i>',
        "name" : "Worldwide Coverage",
        "subheading" : "Access to 10,000+ destinations across 150+ countries",
        "id": "card-4"   
    },
       {
        "icon": '<i class="fa-solid fa-dollar-sign"></i>',
        "name" : "Easy Cancellation",
        "subheading" : "Flexible cancellation policy with quick refunds",
        "id": "card-5"   
    },
       {
        "icon": '<i class="fa-regular fa-thumbs-up"></i>',
        "name" : "Trusted by Millions",
        "subheading" : "Over 5 million happy travelers have chosen us",
        "id": "card-6"   
    },
]

const chooseConatin = document.querySelector('.choose-conatin');

chooiseCard.forEach((items)=>{
    chooseConatin.innerHTML += `
    <div class="choose-card">
          <i>${items.icon}</i>
          <h1>${items.name}</h1>
          <p>${items.subheading}</p>
        </div>
    `
})