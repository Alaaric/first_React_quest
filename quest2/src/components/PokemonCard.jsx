

function PokemonCard() {

    let Mokepon = pokemonList[1];

  return (
    <figure>
        {Mokepon.hasOwnProperty("imgSrc") ? <img src={Mokepon.imgSrc}></img> : <p>???</p>}
        <figcaption>{Mokepon.name}</figcaption>
    </figure>
  );
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;