import React, { useState } from "react";
import styled from "styled-components";
import PokemonCard from "../PokeAPI/PokemonCard";

const PokemonData: React.FC = () => {
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
    <div>
      {isSubmitted ? (
        <PkmnData>
          <form onSubmit={submitHandler}>
            <button type="submit">Search Another Pokemon</button>
          </form>
          <PokemonCard
            url="https://pokeapi.co/api/v2/pokemon"
            name={pokemonName}
          />
        </PkmnData>
      ) : (
        <Data onSubmit={submitHandler}>
          <input type="text" onChange={searchHandler} />
          <button type="submit">Search</button>
        </Data>
      )}
    </div>
  );
};

const Data = styled.form`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PkmnData = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default PokemonData;
