import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { Container, Label, Value, ViewLabel, Status } from "./styles";
import { useSelector } from "react-redux";
import { typeColors } from "../../utils/colors";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

function About() {
  const pokemon = useSelector((state) => state.pokemonDetail);
  return (
    <Container>
      <ViewLabel>
        <Label>Types:</Label>
        {pokemon.types.map(({ type }, index) => (
          <Value key={index} style={{ marginRight: 10 }}>
            {type.name}
          </Value>
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
          {pokemon.abilities.map(({ ability }, index) => (
            <Value
              key={index}
              style={{
                width: "30%",
                fontSize: 12,
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

function Settings() {
  const pokemon = useSelector((state) => state.pokemonDetail);
  return (
    <Container>
      {pokemon.stats.map((item, index) => (
        <ViewLabel key={index}>
          <Label>{item.stat.name}</Label>
          <Value style={{ marginRight: 10 }}>{item.base_stat}</Value>
          <Status width={item.base_stat} />
        </ViewLabel>
      ))}
    </Container>
  );
}

const renderScene = SceneMap({
  about: About,
  abilities: Settings,
});

const TabDetails = ({ color }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    { key: "about", title: "About" },
    { key: "abilities", title: "Abilities" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: color }}
      activeColor={color}
      pressColor={color}
      labelStyle={{ color: "black" }}
      style={{ backgroundColor: "white" }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
export default TabDetails;
