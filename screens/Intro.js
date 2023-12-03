import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { GlobalStyles } from "../contasns/theme";
import IntroContent from "../components/UI/IntroContent";
import Button from "../components/UI/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { useAnimatedStyle, withSpring } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Intro = () => {
  const introData = [
    {
      id: 1,
      image: require("../assets/images/1.png"),
      title: "Проходи Регистрацию",
      subTitle: "И не еби мозги, потому шо шамарну падла",
    },
    {
      id: 2,
      image: require("../assets/images/2.png"),
      title: "Заказывай кофе",
      subTitle: "Подавись и иди нахуй",
    },
    {
      id: 3,
      image: require("../assets/images/3.png"),
      title: "Приходи забирай!",
      subTitle: "И уебуй нахуй, пока я тебе ноги не переломал паскуда",
    },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const navigation = useNavigation();

  const handleNextContent = useCallback(() => {
    if (selectedId === introData.length) {
      navigation.navigate("Login");
    }
    setSelectedId((prev) => prev + 1);
  }, [selectedId]);

  const handleSkipContent = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerIndicator}>
        {introData.map((item) => (
          <View
            item={item.id}
            key={item.id}
            style={
              item.id === selectedId
                ? styles.containerIndicatorItemActive
                : styles.containerIndicatorItem
            }
          ></View>
        ))}
      </View>
      {introData.map((item) => {
        if (item.id === selectedId) {
          return <IntroContent key={item.id} {...item} />;
        }
      })}
      <View style={styles.buttonContainer}>
        <Button onPress={handleNextContent}>Продолжить</Button>
        <Pressable onPress={handleSkipContent}>
          <Text style={styles.buttonOutline}>Пропустить</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  containerIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  containerIndicatorItem: {
    width: 35,
    height: 7,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.regularGreen,
  },
  containerIndicatorItemActive: {
    width: 35,
    height: 7,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.darkGreen,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  buttonOutline: {
    color: GlobalStyles.colors.darkGreen,
    fontSize: GlobalStyles.sizes.font,
    textDecorationLine: "underline",
  },
});
