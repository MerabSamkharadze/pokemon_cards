import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon, exp }) {
  return (
    <div className="Pokedex">
      <p>Total EXP: {exp}</p>
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
