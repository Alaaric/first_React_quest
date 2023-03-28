

function PokemonCard({Mokepon}) {

  return (
    <figure>
        {Mokepon.hasOwnProperty("imgSrc") ? <img src={Mokepon.imgSrc} alt={Mokepon.name}></img> : <p>???</p>}
        <figcaption>{Mokepon.name}</figcaption>
    </figure>
  );
}


export default PokemonCard;