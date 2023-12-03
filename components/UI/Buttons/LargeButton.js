import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";
import { Ionicons } from "@expo/vector-icons/build/Icons";

const LargeButton = ({ children, iconName, iconSize }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>
        <Ionicons name={iconName} size={iconSize} /> {children}
      </Text>
    </Pressable>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  container: {
    width: 320,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.regularGreen,
    paddingVertical: 10,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: GlobalStyles.sizes.font,
    color: GlobalStyles.colors.regularGreen,
    alignSelf: "center",
  },
});
