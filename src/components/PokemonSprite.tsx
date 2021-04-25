import React, { useState, useEffect } from "react";
import axios from "axios";

interface Options {
  name: string;
  url: string;
}

const PokemonSprite: React.FC<Options> = ({ name, url }) => {
  const [sprite, setSprite] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${url}/${name}`)
      .then((res) => {
        console.log("PokemonSprite Request", res);
        setSprite(res.data.sprites.front_default);
      })
      .catch((err) => console.error(err));
  }, [url, name]);

  return (
    <div>
      <img src={sprite} alt="pokemon sprite" />
    </div>
  );
};

export default React.memo(PokemonSprite);
