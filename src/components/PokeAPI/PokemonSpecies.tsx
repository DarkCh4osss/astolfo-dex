import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonEvolution from "./PokemonEvolution";

interface Options {
  name: string;
  url: string;
}

const PokemonSpecies: React.FC<Options> = ({ name, url }) => {
  const [evolution, setEvolution] = useState<string>("");
  const [canEvolve, setCanEvolve] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${url}/${name}`)
      .then((res) => {
        console.log("PokemonSpecies Request", res);
        setEvolution(res.data.evolution_chain.url);
        if (res.data.evolves_from_species === null) {
          setCanEvolve(true);
        } else {
          setCanEvolve(false);
        }
      })
      .catch((err) => console.error(err));
  }, [url, name]);

  return (
    <div>
      <PokemonEvolution url={evolution} hasEvolution={canEvolve} />
    </div>
  );
};

export default React.memo(PokemonSpecies);
