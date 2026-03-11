let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".service-card");

cards.forEach(function(card){

let text = card.textContent.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});
