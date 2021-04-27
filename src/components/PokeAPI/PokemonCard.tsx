import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import PokemonSprite from "./PokemonSprite";
import PokemonSpecies from "./PokemonSpecies";
import PokemonTypes from "./PokemonTypes";
import PokemonEncounters from "./PokemonEncounters";

interface Options {
  name: string;
  url: string;
}

const PokemonCard: React.FC<Options> = ({ name, url }) => {
  const [pokemonId, setPokemonId] = useState<number>();

  useEffect(() => {
    axios
      .get(`${url}/${name}`)
      .then((res: AxiosResponse<any>) => {
        console.log("PokemonCard Request", res);
        setPokemonId(res.data.order);
      })
      .catch((err) => console.error(err));
  }, [url, name, pokemonId]);

  return (
    <Card>
      <h1>{name}</h1>
      <PokemonSprite url="https://pokeapi.co/api/v2/pokemon-form" name={name} />
      <PokemonSpecies
        url="https://pokeapi.co/api/v2/pokemon-species"
        name={name}
      />
      <PokemonTypes url="https://pokeapi.co/api/v2/pokemon" name={name} />
      <PokemonEncounters url="https://pokeapi.co/api/v2/pokemon" name={name} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default React.memo(PokemonCard);
