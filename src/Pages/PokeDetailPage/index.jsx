import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokeDetails from "../../Components/PokeDetails";
import Spinner from "../../Components/Spinner";
import axios from "axios";

const PokeDetailPage = () => {
  useEffect(() => {
    getPokemonBasic();
    getPokemonAdvanced();
  }, []);

  const { id } = useParams();

  const [PokemonBasic, setPokemonBasic] = useState();
  const [Pokemondvanced, setPokemonAdvanced] = useState();

  const getPokemonBasic = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemonBasic(res))
      .catch((err) => console.log(err));
  };

  const getPokemonAdvanced = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => setPokemonAdvanced(res))
      .catch((err) => console.log(err));
  };

  if (PokemonBasic && Pokemondvanced) {
    return (
      <PokeDetails
        PokemonBasic={PokemonBasic}
        PokemonAdvanced={Pokemondvanced}
      />
    );
  } else {
    return <Spinner />;
  }
};

export default PokeDetailPage;
