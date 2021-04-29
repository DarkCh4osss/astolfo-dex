import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import "./PokemonTypes.css";

interface Options {
  name: string;
  url: string;
}

const PokemonTypes: React.FC<Options> = ({ name, url }) => {
  const [typesAmount, setTypesAmount] = useState<number>();
  const [pokemonFirstType, setPokemonFirstType] = useState<Object | Object[]>();
  const [pokemonSecondType, setPokemonSecondType] = useState<
    Object | Object[]
  >();

  useEffect(() => {
    axios
      .get(`${url}/${name}`)
      .then((res: AxiosResponse<any>) => {
        console.log("PokemonTypes Request", res.data.types);
        if (res.data.types.length > 1) {
          setTypesAmount(2);
          setPokemonFirstType(res.data.types[0].type.name);
          setPokemonSecondType(res.data.types[1].type.name);
        } else {
          setTypesAmount(1);
          setPokemonFirstType(res.data.types[0].type.name);
        }
        // setPokemonTypes(res.data.types);
      })
      .catch((err) => console.error(err));
  }, [name, url]);

  // console.log(pokemonTypes);

  return (
    <div>
      {typesAmount! > 1 ? (
        <Types>
          <p className={pokemonFirstType?.toString()}>{pokemonFirstType}</p>
          <p className={pokemonSecondType?.toString()}>{pokemonSecondType}</p>
        </Types>
      ) : (
        <p className={pokemonFirstType?.toString()}>{pokemonFirstType}</p>
      )}
    </div>
  );
};

const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  p {
    padding: 0rem 2rem;
  }
`;

export default PokemonTypes;
