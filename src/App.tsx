import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./Store";
import { GetPokemon } from "./actions/PokemonActions";
function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  console.log(pokemonState);
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search </button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ability, index) => {
            return <p key={index}>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
