document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon()
}) 

//Render 


//GET Requests
//GET All
function fetchAllPokemon(){
    fetch('https://api.yelp.com/v3/businesses/search')
    .then(res => res.json())
    .then(data => console.log(data))
}
