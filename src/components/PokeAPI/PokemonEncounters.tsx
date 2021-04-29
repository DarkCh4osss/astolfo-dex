import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Options {
  name: string;
  url: string;
}

const PokemonEncounters: React.FC<Options> = ({ name, url }) => {
  const [pokeLocation, setPokeLocation] = useState<Object | Object[]>({});

  useEffect(() => {
    axios
      .get(`${url}/${name}/encounters`)
      .then((res: AxiosResponse<any>) => {
        console.log(res);
        setPokeLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, [name, url]);

  return (
    <div>
      {Object.entries(pokeLocation).map((key) => (
        <p>{key[1].location_area.name.replace(/-/g, " ")}</p>
      ))}
    </div>
  );
};

export default PokemonEncounters;
