import React from "react";
import CharacterList from "./CharacterList";

const CharacterCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.url} alt={props.name} />
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
    </div>
  );
  // ;<span>todo: character</span>;
};

export default CharacterCard;
