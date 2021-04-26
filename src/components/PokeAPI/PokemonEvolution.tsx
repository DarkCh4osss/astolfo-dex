import React, { useState, useEffect } from "react";
import axios from "axios";

interface Options {
  url: string;
  hasEvolution: boolean;
}

const PokemonEvolution: React.FC<Options> = ({ url, hasEvolution }) => {
  const [pokemonEv, setPokemonEv] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log("PokemonEvolution Request", res);
        // if (hasEvolution) {
        setPokemonEv(
          `${res.data.chain.species.name} evolves into ${res.data.chain.evolves_to[0].species.name} at level ${res.data.chain.evolves_to[0].evolution_details[0].min_level}`
        );
        // } else {
        //   setPokemonEv(`${res.data.chain.name} does not evolve`);
        // }
      })
      .catch((err) => console.error(err));
  }, [url, hasEvolution]);

  return (
    <div>
      <p>{pokemonEv}</p>
    </div>
  );
};

export default React.memo(PokemonEvolution);
