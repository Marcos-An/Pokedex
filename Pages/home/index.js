import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { Container, Image, TextInput } from "./styles";
import Card from "../../Components/card";
import Loading from "../../Components/loading";
import Constants from "expo-constants";
import { client } from "../../services/axios";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [pokemonSerched, setSerched] = useState([]);
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const pokemon = useSelector((state) => state.pokemon);
  const nextUrl = useSelector((state) => state.next);

  const removeDuplicate = (arr) => {
    return [...new Set(arr)];
  };

  const getNext = () => {
    axios.get(nextUrl).then(({ data }) => {
      dispatch({ type: "NEXT", value: data.next });
      const newPokemon = [...pokemon, ...data.results];
      dispatch({ type: "POKEMON", value: removeDuplicate(newPokemon) });
    });
  };

  const getPokemon = async () => {
    const { data } = await client.get("/pokemon");
    dispatch({ type: "POKEMON", value: data.results });
    dispatch({ type: "NEXT", value: data.next });
  };

  useEffect(() => {
    if (pokemon.length === 0) {
      getPokemon();
    }
  }, []);

  const makeSearch = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then(({ data }) => {
        setSerched([data]);
        setErro(false);
        setLoading(false);
      })
      .catch(() => {
        setSerched([]);
        setErro(true);
        setLoading(false);
      });
  };

  const delayedQuery = useCallback(debounce(makeSearch, 500), [search]);

  const onChange = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);
      delayedQuery();
      return delayedQuery.cancel;
    } else {
      setLoading(false);
      setErro(false);
      setSerched([]);
    }
  }, [search, delayedQuery]);

  return (
    <Container style={styles.container}>
      <Image source={require("../../assets/pokeball-black.png")} />
      <TextInput
        onChangeText={onChange}
        placeholder="Search your favorite pokemon!"
      />
      {!loading ? (
        <SafeAreaView style={styles.pokemon}>
          {erro && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>I DONT FIND YOUR FAVORITE POKEMON!</Text>
            </View>
          )}
          {pokemonSerched.length > 0 && (
            <FlatList
              data={pokemonSerched}
              keyExtractor={(item) => item.id}
              numColumns={2}
              onEndReached={getNext}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                return <Card pokemonName={item.name} />;
              }}
            />
          )}
          {!erro && pokemonSerched.length === 0 && (
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
          )}
        </SafeAreaView>
      ) : (
        <Loading source={require("../../assets/pokeball-black.png")} />
      )}
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
