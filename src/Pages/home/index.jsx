import React, { useEffect, useState } from "react";
import PokeCard from "../../Components/PokeCard";
import SearchBar from "../../Components/SearchBar";
import axios from "axios";

import "./Home.css";
import Spinner from "../../Components/Spinner";

const Home = () => {
  const [PokemonData, setPokemonData] = useState();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemonData(res))
      .catch((err) => console.log(err));
  };

  const filterPokemon = (name) => {
    let filteredPokemon = [];
    if (name === "") {
      getPokemon();
    }
    for (let i in PokemonData) {
      if (PokemonData[i].data.name.includes(name)) {
        filteredPokemon.push(PokemonData[i]);
      }
      setPokemonData(filteredPokemon);
    }
  };

  if (PokemonData) {
    return (
      <>
        <SearchBar filterPokemon={filterPokemon} />
        <div className="ContentContainer">
          {PokemonData.map((pokemon) => (
            <PokeCard
              key={pokemon.data.id}
              id={pokemon.data.id}
              name={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              types={pokemon.data.types}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <SearchBar />
        <Spinner />
      </>
    );
  }
};

export default Home;
