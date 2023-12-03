import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../../contasns/theme";

const Input = ({ label, inputConfig, inValidate, errorMessage, required }) => {
  const [focusColor, setFocusColor] = useState(GlobalStyles.colors.gray);

  const foculHandle = () => {
    setFocusColor(GlobalStyles.colors.regularGreen);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{required ? label + "*" : label}</Text>
      <TextInput
        onFocus={foculHandle}
        style={[styles.inputStyle, { borderColor: focusColor }]}
        {...inputConfig}
      />
      {errorMessage && <Text style={styles.invalidText}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
  },
  inputStyle: {
    width: 320,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.gray,
    marginVertical: 10,
    borderRadius: 15,
    paddingVertical: 10,
    fontSize: GlobalStyles.sizes.font,
    paddingLeft: 10,
  },
  text: {
    marginLeft: 15,
    fontSize: GlobalStyles.sizes.font,
    fontFamily: GlobalStyles.fonts.medium,
  },
  invalidText: {
    textAlign: "right",
    color: GlobalStyles.colors.red,
  },
});
