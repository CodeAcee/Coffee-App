import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const IconButton = ({ name, size, onPress, mode, withBackground }) => {
  return (
    <Pressable
      onPress={onPress}
      style={withBackground && styles.stylesIconContainer}
    >
      {mode === "fontAwesome" ? (
        <FontAwesome5
          name={name}
          size={size}
          color={GlobalStyles.colors.regularGreen}
        />
      ) : (
        <Ionicons
          name={name}
          size={size}
          color={GlobalStyles.colors.regularGreen}
        />
      )}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  stylesIconContainer: {
    padding: 5,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 10,
  },
});
