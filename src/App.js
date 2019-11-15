import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
// import CharacterCard from "./CharacterCard";

export default function App() {
  return (
    <main>
      <Header />
      {/* <CharacterCard /> */}
      <CharacterList />
    </main>
  );
}
