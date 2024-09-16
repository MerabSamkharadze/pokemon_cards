import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon, exp, iswinner }) {
  let title;
  if (iswinner) {
    title = <h2 className="Pokedex-winner">Winner!</h2>;
  } else {
    title = <h2 className="Pokedex-looser">Looser!</h2>;
  }
  return (
    <div className="Pokedex">
      <p>Total EXP: {exp}</p>
      {title}
      <div className="Pokedex-cards">
        {" "}
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
