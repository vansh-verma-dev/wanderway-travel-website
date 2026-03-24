let Nextbtn = document.getElementById('Nextbtn');
let root  = document.querySelector('.user-details');
let PaymentSelect = document.querySelector('.Payment_select');
let userform = document.querySelector('.user-form');
 
Nextbtn.addEventListener('click',(e)=>{
   
 root.innerHTML = `
  <section class="Payment_select">
   <div class="pay-hrading">
          <h1>Pay Online</h1>
          <p>You'll pay when you complete this booking.</p>
          <span>
            <i class="fa-solid fa-credit-card"></i>
            <img
              src="https://i.pinimg.com/736x/6c/08/05/6c0805b924906d8d11aa31165baefeca.jpg"
              alt=""
            />
          </span>
        </div>

        <div class="payment-details">
          <h1>How would you like to pay?</h1>

          <div class="UPI-Card">
            <h2>Complete the ₹4,573.80 payment in your UPI app</h2>
            <div class="scan-details">
                <img src="https://i.pinimg.com/736x/46/6f/1a/466f1aa5d91bd75150cd8c1005b1ef21.jpg" alt="">

                <div class="tittle">
                    <h2>Next steps</h2>
                    <ul>
                        <li>Scan the QR code using your UPI app</li>
                        <li>Enter your UPI PIN to complete the payment</li>
                        <li>Your booking confirmation will appear here</li>
                    </ul>
                </div>
            </div>

            <div class="all-UPI">
                <p>All UPI Apps Supported</p>
              <ul>
                <i class="fa-brands fa-google-pay"></i>
                <i class="fa-brands fa-paypal"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-amazon-pay"></i>
                <i class="fa-brands fa-cc-visa"></i>
              </ul>
            </div>
          </div>

        </div>
      <div class="condition">
           <p>  <input type="checkbox">I agree to receiving marketing emails from Booking.com, including promotions, personalised recommendations, rewards, travel experiences and updates about Booking.com’s products and services.</p>

         <p>By signing up, you allow us to tailor offers and content to your interests by monitoring how you use Booking.com through tracking technologies. Unsubscribe at any time through your account settings or the link in any marketing email. Read our <a href="#">privacy policy</a>.</p>
      </div>
            </section>
 `
})

let packageSection = document.querySelector('package-section');
let two_PackgBtn = document.getElementById('packageBtn_1');
two_PackgBtn.addEventListener('click',()=>{
  alert('clcik');
})