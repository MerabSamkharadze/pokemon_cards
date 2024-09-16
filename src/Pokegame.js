import Pokedex from "./Pokedex";

function Pokegame() {
  const pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  let hand1 = [];
  let hand2 = [...pokemon];
  while (hand2.length > hand1.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }
  console.log(hand1);
  console.log(hand2);

  return (
    <div>
      <h2>Team 1</h2>
      <Pokedex pokemon={hand1} />
      <h2>Team 2</h2>
      <Pokedex pokemon={hand2} />
    </div>
  );
}

export default Pokegame;
