import React from "react";
import { Link } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = ({ id, name, image, types }) => {
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

  const HandleNumber = () => {
    let newId = id.toString();

    if (!newId[2] && newId[1]) {
      return "0" + newId;
    } else if (!newId[1]) {
      return "00" + newId;
    }
    return newId;
  };

  return (
    <Link to={`/pokedetails/${id}`}>
      <div className="PokeCardContainer">
        <img src={image} alt="" />
        <p id="PokeNumber">{"#" + HandleNumber()}</p>
        <p id="PokeName">{name[0].toUpperCase() + name.substring(1)}</p>
        <p id="PokeType">{HandleType()}</p>
      </div>
    </Link>
  );
};

export default PokeCard;
