import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div>
          <Link to={`/`}>
            <a href="">Home</a>
          </Link>
        </div>
        <div>
          <Link to={`/about`}>
            <a href="">Characters</a>
          </Link>
        </div>
      </header>
    </section>
  );
}
