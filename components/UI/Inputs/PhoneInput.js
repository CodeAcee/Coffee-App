import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";
import PhoneInput from "react-native-phone-number-input";

const PhonesInput = ({ inputConfig, errorMessage, required }) => {
  return (
    <View>
      <Text style={styles.text}>
        {required ? "Номер телефона" + "*" : "Номер телефона"}
      </Text>

      <PhoneInput
        {...inputConfig}
        withShadow
        autoFocus
        defaultCode="UA"
        layout="second"
        containerStyle={styles.inputStyle}
        maxLength={4}
      />
      {errorMessage && <Text style={styles.invalidText}>{errorMessage}</Text>}
    </View>
  );
};

export default PhonesInput;

const styles = StyleSheet.create({
  inputStyle: {
    width: 320,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.regularGreen,
    marginVertical: 10,
    borderRadius: 15,
    paddingVertical: 5,
    fontSize: GlobalStyles.sizes.font,
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
