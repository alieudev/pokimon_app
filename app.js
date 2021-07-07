//Will run callback after dom has loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon()
  })
  
  //Render 
  function renderPokemon(pokemon){
    let divContainer = document.createElement('div')
    let divImage = document.createElement('div')
    let divFrame = document.createElement('div')
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
  
    divContainer.className = 'pokemon-card'
    divFrame.className = 'pokemon-frame'
    divImage.className = 'pokemon-image'
    h1.className = 'center-text'
    h1.textContent = pokemon.name
    img.src = pokemon.sprites.front
  
    divImage.append(img)
    divFrame.append(h1, divImage)
    divContainer.append(divFrame)
  
    document.querySelector('#pokemon-container').append(divContainer)
  }
  
  
  //
  function fetchAllPokemon(){
    //Should Fetch all pokemon from our json-server
    //Should handle a promise
    //Should render the return data to the page
  
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => data.forEach(renderPokemon))
  }
  
  