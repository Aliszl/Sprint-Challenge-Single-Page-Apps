import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <Link to={`/`}>
          <a href="">Home</a>
        </Link>
      </div>

      <div>
        <Link to={`/CharacterList`}>
          <a href="">Characters</a>
        </Link>
      </div>
    </header>
  );
}
