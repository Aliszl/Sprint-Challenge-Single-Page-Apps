import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, fetchChars] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    console.log("CharacterList component mounted");
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log("Charachters: ", response.data);
        console.log("Charachters: ", response.data.results);
        fetchChars(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div className="CardContainer">
      {chars.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />

          // <section className="character-list">
          //   <h2>TODO: `array.map()` over your state here!</h2>
          // </section>
        );
      })}
    </div>
  );
}
