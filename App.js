import "react-native-gesture-handler";
//import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navegation from "./src/navigation/Navegation";

export default function App() {
  return (
    <NavigationContainer>
      <Navegation />
    </NavigationContainer>
  );
}
