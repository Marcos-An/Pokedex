import React, { useEffect, useState } from "react";
import {
  Container,
  PokemonName,
  Image,
  PokemonSprite,
  Types,
  TypeContainer,
  TypeName,
  Touchable,
} from "./styles";
import { typeColors } from "../../utils/colors";
import { client } from "../../services/axios";
import { useDispatch } from "react-redux";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ pokemonName }) => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);
  const navigation = useNavigation();

  const getPokemonDetails = async () => {
    const { data } = await client.get(`/pokemon/${pokemonName}`);
    setPokemon(data);
  };

  const handlePokemonDeail = () => {
    dispatch({ type: "POKEMON_DETAIL", value: pokemon });
    navigation.navigate("details");
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  if (!pokemon) {
    return <Text>Loading...</Text>;
  }

  return (
    <Touchable onPress={() => handlePokemonDeail()}>
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
    </Touchable>
  );
};

export default Card;
