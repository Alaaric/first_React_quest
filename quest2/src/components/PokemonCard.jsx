
import PropTypes from "prop-types";

function PokemonCard({Mokepon}) {
  
console.log(Mokepon)
  return (
    <figure>
        {Mokepon.hasOwnProperty("imgSrc") ? <img src={Mokepon.imgSrc} alt={Mokepon.name}></img> : <p>???</p>}
        <figcaption>{Mokepon.name}</figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  Mokepon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};


export default PokemonCard;