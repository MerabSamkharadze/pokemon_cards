import "./Pokecard.css";
// const POKI_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const POKI_API =
  "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

function Pokecard(props) {
  let imgSrc = `${POKI_API}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title"> {props.name}</h1>
      <img src={imgSrc} alt="poke_img" />
      <div className="Pokecard-data">TYPE: {props.type}</div>
      <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;
