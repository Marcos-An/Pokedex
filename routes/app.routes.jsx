import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/home";
import PokemonDetails from "../Pages/pokemonDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="details" component={PokemonDetails} />
    </Navigator>
  );
}
