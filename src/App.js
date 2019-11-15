import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";

// import CharacterCard from "./CharacterCard";

export default function App() {
  return (
    <div>
      {/* <Route exact path="/" component={WelcomePage} /> */}
      <Route exact path="/" render={WelcomePage} />
      <Header />
      {/* <CharacterCard /> */}
      <LocationsList />
      <CharacterList />
      {/* <Route
        exact
        path="/testing-render"
        render={props => {
          console.log(props);
          return <TestingRender customProp="Hello From Props!" {...props} />;
        }}
      /> */}
    </div>
  );
}
