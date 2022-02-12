import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";

const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
    </Tab.Navigator>
  );
}
