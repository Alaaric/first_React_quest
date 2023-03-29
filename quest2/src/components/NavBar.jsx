
const NavBar = ({pokemonList, pokemonIndex, setPokemonIndex}) => {
    
    


    return(
        pokemonList.map((mokepon, index) => (
      <button key={mokepon.name} onClick={() => setPokemonIndex(index) }>{mokepon.name}</button>)
    ))
  };

  export default NavBar;