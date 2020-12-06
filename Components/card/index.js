import React, { useEffect, useState } from "react";
import {
  Container,
  PokemonName,
  Image,
  PokemonSprite,
  Types,
  TypeContainer,
  TypeName,
} from "./styles";
import { typeColors } from "../utils/colors";
import { client } from "../../services/axios";
import { AppLoading } from "expo";

const Card = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemonDetails = async () => {
    const { data } = await client.get(`/pokemon/${pokemonName}`);
    setPokemon(data);
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  if (!pokemon) {
    return <AppLoading />;
  }
  return (
    <Container background={typeColors[pokemon.types[0].type.name]}>
      <PokemonName>{pokemon.species.name}</PokemonName>
      <Types>
        {pokemon.types.map(({ type }, index) => (
          <TypeContainer key={index}>
            <TypeName>{type.name}</TypeName>
          </TypeContainer>
        ))}
      </Types>
      <Image source={require("../../assets/pokeball.png")} />
      <PokemonSprite
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
      />
    </Container>
  );
};

export default Card;
