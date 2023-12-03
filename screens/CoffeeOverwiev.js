import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Checkout from "./Checkout";
import MapScreen from "./Map";
import Main from "./Main";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../contasns/theme.js";

const BottomTabs = createBottomTabNavigator();

const CoffeeOverwiev = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: "#f2f2f2" },
        headerTintColor: GlobalStyles.colors.regularGreen,
        headerTitleStyle: {
          fontFamily: GlobalStyles.fonts.medium,
          fontSize: 22,
        },
        tabBarStyle: {
          height: 110,
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 100,
        },
        tabBarActiveTintColor: GlobalStyles.colors.regularGreen,
        headerLeft: ({ tint, color }) => (
          <AntDesign
            name="left"
            color={GlobalStyles.colors.regularGreen}
            size={25}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIconStyle: {
            color: "black",
          },
          tabBarLabel: "Главная",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={36} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarLabel: "Карта",
          tabBarIcon: ({ color }) => {
            return <Feather name="map-pin" size={36} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="Map"
        component={Checkout}
        options={{
          headerShown: true,

          title: "Оплата заказа",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="basket-outline" size={36} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default CoffeeOverwiev;

const styles = StyleSheet.create({});
