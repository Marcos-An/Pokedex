import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Container, Image, TextInput } from "./styles";
import Card from "../../Components/card";
import Constants from "expo-constants";
import { client } from "../../services/axios";
import axios from "axios";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  const getNext = () => {
    axios.get(nextUrl).then(({ data }) => {
      setNextUrl(data.next);
      setPokemon((current) => [...current, ...data.results]);
    });
  };

  const getPokemon = async () => {
    const { data } = await client.get("/pokemon");
    setNextUrl(data.next);
    setPokemon(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container style={styles.container}>
      <Image source={require("../../assets/pokeball-black.png")} />
      <TextInput placeholder="Search your pokemon!" />
      <SafeAreaView style={styles.pokemon}>
        <FlatList
          data={pokemon}
          keyExtractor={(item) => item.name}
          numColumns={2}
          onEndReached={getNext}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => {
            return <Card pokemonName={item.name} />;
          }}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pokemon: {
    marginTop: 30,
    height: "100%",
  },
});
