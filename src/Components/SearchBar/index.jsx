import React from "react";
import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = ({ filterPokemon }) => {
  return (
    <div className="SearchContainer">
      <div className="InputContainer">
        <input
          type="text"
          placeholder="Pesquisar Pokémon"
          onChange={(e) => filterPokemon(e.target.value.toLowerCase())}
        />
        <div className="SearchIcon">
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
