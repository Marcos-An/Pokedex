import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Home from "../Pages/home";
import PokemonDetail from "../Pages/pokemonDetails";

const Router = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/:pokemon" component={PokemonDetail} />
    </NativeRouter>
  );
};

export default Router;
