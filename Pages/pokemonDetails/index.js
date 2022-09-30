import React from "react";
import { StyleSheet, View } from "react-native";
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

const PokemonDetail = () => {
  const pokemon = useSelector((state) => state.pokemonDetail);
  const color = typeColors[pokemon.types[0].type.name];

  return (
    <Container background={color}>
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
        <TabDetails color={color} />
      </Content>
    </Container>
  );
};

export default PokemonDetail;

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
