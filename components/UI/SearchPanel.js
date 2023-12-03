import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../contasns/theme";
import { Ionicons } from "@expo/vector-icons";

const SearchPanel = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={24}
        color={GlobalStyles.colors.regularGreen}
      />
      <TextInput
        style={styles.inputStyle}
        onChange={() => {}}
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchPanel;

const styles = StyleSheet.create({
  searchContainer: {
    width: 200,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
    padding: 8,
  },
  inputStyle: {
    width: "100%",
    padding: 5,
  },
});
