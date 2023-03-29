import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'





function App() {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex,setPokemonIndex ] = useState(0)

    const handlePrev = () => {
      setPokemonIndex(pokemonIndex -1)
    }

    const handleNext = () => {
      setPokemonIndex( pokemonIndex +1)
    }
    
    
  return (
    <div className="App">

     <PokemonCard Mokepon={pokemonList[pokemonIndex]} />

     <div className='buttons'>
      {pokemonIndex > 0 ? <button onClick={handlePrev} className="prev">précédent</button> : <p>no previous Mokepon!</p>}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext} className="next">suivant</button> : <p>no more Mokepon!</p>}
     </div>
     
    </div>
  )
}

export default App
