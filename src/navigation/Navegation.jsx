/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";

const Tab = createBottomTabNavigator();

export default function Navegation() {
  const renderPokeball = () => (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
