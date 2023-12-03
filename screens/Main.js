import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import CoffeeList from "../components/UI/List/CoffeList";
import { dummyCafe } from "../dummy/dummyCafeData";
import MainSlider from "../components/UI/Slider/MainSlider";
import IconButton from "../components/UI/Buttons/IconButton";
import SearchPanel from "../components/UI/SearchPanel";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  const openModal = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <IconButton
          mode="fontAwesome"
          name="user-circle"
          size={36}
          color="black"
          withBackground
          onPress={openModal}
        />
        <SearchPanel />
      </View>
      <ScrollView>
        <MainSlider />
        <CoffeeList listData={dummyCafe} title={"Избранное"} />
        <CoffeeList listData={dummyCafe} title={"Новости"} />
        <CoffeeList listData={dummyCafe} title={"Специальные предложения"} />
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    marginBottom: 120,
    marginTop: 50,
  },
});
