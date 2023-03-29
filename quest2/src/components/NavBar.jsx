
const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {
    

    const handlePrev = () => {
      setPokemonIndex(pokemonIndex -1)
    }

    const handleNext = () => {
      setPokemonIndex( pokemonIndex +1)
    }
    return(
      <nav className='NavBar'>
      {pokemonIndex > 0 ? <button onClick={handlePrev}>précédent</button> : <p>no previous Mokepon!</p>}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>suivant</button> : <p>no more Mokepon!</p>}
     </nav>
    )
  };

  export default NavBar;