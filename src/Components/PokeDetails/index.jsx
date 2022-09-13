import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./PokeDetails.css";

const PokeDetails = ({ PokemonBasic, PokemonAdvanced }) => {
  if (PokemonBasic.data && PokemonAdvanced.data) {
    const id = PokemonBasic.data.id;
    const name = PokemonBasic.data.name;
    const img = PokemonBasic.data.sprites.other.dream_world.front_default;
    const height = PokemonBasic.data.height;
    const weight = PokemonBasic.data.weight;
    const abilities = PokemonBasic.data.abilities;
    const types = PokemonBasic.data.types;
    const dexEntries = PokemonAdvanced.data.flavor_text_entries[6].flavor_text;
    const eggGroup = PokemonAdvanced.data.egg_groups;

    const HandleNumber = () => {
      let newId = id.toString();

      if (!newId[2] && newId[1]) {
        return "0" + newId;
      } else if (!newId[1]) {
        return "00" + newId;
      }
      return newId;
    };

    const HandleWeight = () => {
      let newWeight = weight.toString();

      if (newWeight[3]) {
        const partOne = newWeight.slice(0, 3);
        const partTwo = newWeight.slice(3, 4);
        const finalWeight = partOne + "." + partTwo;
        return finalWeight;
      } else if (newWeight[2]) {
        const partOne = newWeight.slice(0, 2);
        const partTwo = newWeight.slice(2);
        const finalWeight = partOne + "." + partTwo;
        return finalWeight;
      } else if (newWeight[1]) {
        const partOne = newWeight.slice(0, 1);
        const partTwo = newWeight.slice(1);
        const finalWeight = partOne + "." + partTwo;
        return finalWeight;
      } else {
        const partOne = "0";
        const finalWeight = partOne + "." + newWeight;
        return finalWeight;
      }
    };

    const HandleHeight = () => {
      const newHeight = height.toString();

      if (newHeight[1]) {
        const partOne = newHeight.slice(0, 1);
        const partTwo = newHeight.slice(1);
        const finalHeight = partOne + "." + partTwo;
        return finalHeight;
      } else {
        const partOne = "0";
        const finalHeight = partOne + "." + newHeight;
        return finalHeight;
      }
    };

    const HandleType = () => {
      if (types[1]) {
        return (
          types[0].type.name[0].toUpperCase() +
          types[0].type.name.substring(1) +
          " | " +
          types[1].type.name[0].toUpperCase() +
          types[1].type.name.substring(1)
        );
      }
      return (
        types[0].type.name[0].toUpperCase() + types[0].type.name.substring(1)
      );
    };

    const HandleFirstUpperCase = (string) =>
      string[0].toUpperCase() + string.substring(1);

    return (
      <>
        <Link to="/">
          <BiArrowBack />
        </Link>
        <div className="PokeDetailContainer">
          <div className="PokemonNameContainer">
            <p>
              <strong>{HandleFirstUpperCase(name)} </strong>
              {"#" + HandleNumber()}
            </p>
          </div>
          <div className="PokeImgContainer">
            <img src={img} alt="" />
          </div>
          <div className="InfoDetailsContainer">
            <p>{dexEntries.replace("", " ")}</p>
            <div className="DetailsContainer">
              <div className="PokeHeight">
                <h4>Height:</h4>
                <p>{HandleHeight()} m</p>
              </div>
              <div className="PokeWeight">
                <h4>Weight: </h4>
                <p>{HandleWeight()} kg</p>
              </div>
              <div className="PokeAbilities">
                <h4>Abilities:</h4>
                {abilities.map((ability) => (
                  <p> {HandleFirstUpperCase(ability.ability.name)} </p>
                ))}
              </div>
              <div className="PokeType">
                <h4>Type:</h4>
                <p>{HandleType()}</p>
              </div>
              <div className="PokeEggGroup">
                <h4>Egg Group:</h4>
                {eggGroup.map((group) => (
                  <p> {HandleFirstUpperCase(group.name)} </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PokeDetails;
