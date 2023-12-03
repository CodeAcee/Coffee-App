import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../contasns/theme";
import ImageLogo from "../components/UI/ImageLogo";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useDispatch } from "react-redux";
import { authCode } from "../store/redux/authReducer";

const OtpScreen = ({ resendCode }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.inputContainer}>
      <ImageLogo />
      <View style={styles.optContainer}>
        <Text style={styles.confirmText}>Подтверждение</Text>
        <OTPInputView
          style={{ width: "80%", height: 100 }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.borderStyleBase}
          codeInputHighlightStyle={styles.inputHighLight}
          onCodeFilled={(verificationCode) =>
            dispatch(authCode({ code: verificationCode }))
          }
        />
      </View>

      <Pressable onPress={resendCode}>
        <Text style={styles.supportBtn}>Отправить код еще раз</Text>
      </Pressable>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: GlobalStyles.colors.white,
    paddingTop: 60,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    alignItems: "center",
  },
  optContainer: {
    justifyContent: "center",
  },
  inputHighLight: {
    borderRadius: 10,
    borderColor: GlobalStyles.colors.regularGreen,
  },
  borderStyleBase: {
    color: "black",
    fontSize: GlobalStyles.sizes.medium,
    borderColor: GlobalStyles.colors.lightGreen,
    borderRadius: 10,
    margin: 10,
  },
  supportBtn: {
    color: GlobalStyles.colors.gray,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  confirmText: {
    fontSize: GlobalStyles.sizes.medium,
    fontFamily: GlobalStyles.fonts.regular,
    textAlign: "center",
  },
});
