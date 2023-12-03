import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useReducer } from "react";
import AuthForm from "./AuthForm";
import { GlobalStyles } from "../../contasns/theme";
import IconButton from "../UI/Buttons/IconButton";
import { useNavigation } from "@react-navigation/native";
import { schemaLogin, schemaRegister } from "./AuthSchema";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageLogo from "../UI/ImageLogo";

const AuthContent = ({ isLogin, onAuth }) => {
  const navigation = useNavigation();
  const initialValues = isLogin
    ? {
        phone: "",
      }
    : {
        phone: "",
        name: "",
        email: "",
      };
  const [state, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      otp: "",
      loading: false,
    }
  );
  const navigationHandler = () => {
    isLogin ? navigation.navigate("SignUp") : navigation.navigate("Login");
  };

  const formMethods = useForm({
    resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
    defaultValues: initialValues,
  });

  const onSubmit = (data) => onAuth(data);

  const appleLoginHandler = () => console.log("pressed");

  return (
    <View style={styles.authContent}>
      <ImageLogo />
      <Text style={styles.authText}>{isLogin ? "Вход" : "Регистрация"}</Text>
      <FormProvider {...formMethods}>
        <AuthForm isLogin={isLogin} onAuth={onAuth} onSubmit={onSubmit} />
      </FormProvider>
      <View style={styles.authIconContainer}>
        <Text style={styles.authIconText}>
          {isLogin ? "Войти через" : "Загеристрироватся через"}
        </Text>
        <View style={styles.iconContainer}>
          <IconButton name="logo-apple" size={42} onPress={appleLoginHandler} />
          <IconButton
            name="logo-google"
            size={42}
            onPress={appleLoginHandler}
          />
          <IconButton
            name="logo-facebook"
            size={42}
            onPress={appleLoginHandler}
          />
        </View>
      </View>

      <View style={styles.buttonNavigationContainer}>
        <Pressable onPress={navigationHandler}>
          <Text style={styles.regButton}>
            {isLogin ? "Зарегистрироватся" : "Войти в аккаунт"}
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Support")}>
          <Text style={styles.supportBtn}>Техподдержка</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    backgroundColor: GlobalStyles.colors.white,
    paddingTop: 60,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "black",
    flex: 1,
    alignItems: "center",
  },
  authText: {
    fontSize: GlobalStyles.sizes.medium,
    fontFamily: GlobalStyles.fonts.regular,
    marginBottom: 40,
  },
  authIconText: {
    fontSize: GlobalStyles.sizes.medium,
    fontFamily: GlobalStyles.fonts.regular,
  },
  authIconContainer: {
    marginVertical: 40,
    alignItems: "center",
  },
  iconContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  regButton: {
    color: GlobalStyles.colors.darkGreen,
    fontSize: GlobalStyles.sizes.font,
    textDecorationLine: "underline",
  },
  supportBtn: {
    color: GlobalStyles.colors.gray,
    marginBottom: 20,
  },
  buttonNavigationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
