import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Content,
  PokemonSprite,
  PokemonName,
  ContentTop,
  Images,
  Types,
  PokemonId,
  TypeContainer,
  TypeName,
} from "./styles";
import { typeColors } from "../../utils/colors";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import BackButton from "./iconBack";
import TabDetails from "../../Components/TabDetails";

const pokemonDetail = () => {
  const pokemon = useSelector((state) => state.pokemonDetail);

  return (
    <Container background={typeColors[pokemon.types[0].type.name]}>
      <ContentTop style={styles.container}>
        <BackButton />
        <Images source={require("../../assets/pokeball.png")} />
        <View style={styles.nameId}>
          <PokemonName>{pokemon.species.name}</PokemonName>
          <PokemonId>{`#${pokemon.id}`}</PokemonId>
        </View>
        <Types>
          {pokemon.types.map(({ type }, index) => (
            <TypeContainer key={index}>
              <TypeName>{type.name}</TypeName>
            </TypeContainer>
          ))}
        </Types>
        <PokemonSprite
          style={styles.image}
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
        />
      </ContentTop>
      <Content style={styles.content}>
        <TabDetails />
      </Content>
    </Container>
  );
};

export default pokemonDetail;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 30,
  },
  nameId: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: "contain",
  },
});
