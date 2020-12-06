import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Container, Label, Value, ViewLabel, Status } from "./styles";
import { useSelector } from "react-redux";
import { typeColors } from "../../utils/colors";

function About() {
  const pokemon = useSelector((state) => state.pokemonDetail);
  return (
    <Container>
      <ViewLabel>
        <Label>Types:</Label>
        {pokemon.types.map(({ type }) => (
          <Value style={{ marginRight: 10 }}>{type.name}</Value>
        ))}
      </ViewLabel>
      <ViewLabel>
        <Label>Height:</Label>
        <Value>{pokemon.height}</Value>
      </ViewLabel>
      <ViewLabel>
        <Label>Weight:</Label>
        <Value>{pokemon.weight}</Value>
      </ViewLabel>
      <ViewLabel style={{ flexDirection: "column" }}>
        <Label style={{ fontSize: 20, color: "#000", fontWeight: "700" }}>
          Abilities:
        </Label>
        <View style={{ flexDirection: "row" }}>
          {pokemon.abilities.map(({ ability }) => (
            <Value
              style={{
                width: "30%",
                marginRight: 10,
                marginTop: 20,
                color: "white",
                padding: 8,
                borderRadius: 6,
                backgroundColor: typeColors[pokemon.types[0].type.name],
              }}
            >
              {ability.name}
            </Value>
          ))}
        </View>
      </ViewLabel>
    </Container>
  );
}

function SettingsScreen() {
  const pokemon = useSelector((state) => state.pokemonDetail);
  return (
    <Container>
      {pokemon.stats.map((item) => (
        <ViewLabel>
          <Label>{item.stat.name}</Label>
          <Value style={{ marginRight: 10 }}>{item.base_stat}</Value>
          <Status width={item.base_stat} />
        </ViewLabel>
      ))}
    </Container>
  );
}

const Tab = createMaterialTopTabNavigator();

const TabDetails = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Base status" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabDetails;
