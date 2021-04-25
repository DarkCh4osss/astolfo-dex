import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import PokemonSprite from "./PokemonSprite";
import PokemonSpecies from "./PokemonSpecies";

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
        console.log(pokemonId);
      })
      .catch((err) => console.error(err));
  }, [url, name, pokemonId]);

  return (
    <div>
      <h1>{name}</h1>
      <PokemonSprite url="https://pokeapi.co/api/v2/pokemon-form" name={name} />
      <PokemonSpecies
        url="https://pokeapi.co/api/v2/pokemon-species"
        name={name}
      />
    </div>
  );
};

export default React.memo(PokemonCard);
