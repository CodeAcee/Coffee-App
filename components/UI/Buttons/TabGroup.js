import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";
import IconButton from "./IconButton";

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 60,
        marginHorizontal: 25,
      }}
    >
      <View style={{ marginRight: 20 }}>
        <IconButton
          name="close"
          size={32}
          onPress={() => navigation.navigate('CoffeeOverwiev')}
        />
      </View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              backgroundColor: isFocused
                ? GlobalStyles.colors.regularGreen
                : GlobalStyles.colors.white,
              textTransform: "none",
              fontFamily: GlobalStyles.fonts.bold,
              height: 30,
              minHeight: 10,
              borderRadius: 100,
              marginVertical: 10,
              marginHorizontal: -5,
              zIndex: isFocused ? 100 : 0,
              width: 150,
              padding: 3,
              paddingTop: 5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: isFocused
                  ? GlobalStyles.colors.white
                  : GlobalStyles.colors.black,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
