import React, { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className="App">
      {isSubmitted ? (
        <div>
          <form onSubmit={submitHandler}>
            <button type="submit">Search Another Pokemon</button>
          </form>
          <PokemonCard
            url="https://pokeapi.co/api/v2/pokemon"
            name={pokemonName}
          />
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <input type="text" onChange={searchHandler} />
          <button type="submit">Search</button>
        </form>
      )}
    </div>
  );
}

export default App;
