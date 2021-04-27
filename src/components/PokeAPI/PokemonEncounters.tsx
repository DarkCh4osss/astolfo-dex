import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Options {
  name: string;
  url: string;
}

const PokemonEncounters: React.FC<Options> = ({ name, url }) => {
  const [pokeLocation, setPokeLocation] = useState<object>();

  useEffect(() => {
    axios
      .get(`${url}/${name}/encounters`)
      .then((res: AxiosResponse<any>) => {
        console.log(res);
        setPokeLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, [name, url]);

  console.log(typeof pokeLocation);
  // Object.entries(pokeLocation).map((key) => console.log(key));

  return <div></div>;
};

export default PokemonEncounters;
