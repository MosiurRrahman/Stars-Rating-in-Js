// initial Ratings
const ratings = {
    sony: 4.5,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 5,
    phillips: 4.1
}

// Total Stars
const starsTotal = 5;

// Run getRatings whrn DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

// product select change
productSelect.addEventListener('change', (e)=>{
    product = e.target.value;
    console.log(product);

// Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

// Rating control change
ratingControl.addEventListener('blur', (e)=>{
    const rating = e.target.value;
    // Make sure 5 or under
    
    if(rating > 5){
        alert("Please rate 1 - 5");
        return rating;
    }

    // change rating
    ratings[product] = rating;

    getRatings();
});
// get ratings
function getRatings(){
    for(rating in ratings){;
        // get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        // Round to nearest 10
       const starPercentageRounded =(` ${Math.round(starPercentage / 10) * 10}%`)

        // Set width of stars-inner to percentage
     document.querySelector(` .${rating} .stars-inner`).style.width = starPercentageRounded;

    //  Add number Rating
   const x =  document.querySelector(` .${rating} .number-rating`).innerHTML = ratings[rating];
   console.log(x);
    }
}

var input = document.getElementById("rating-control");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
  }
});