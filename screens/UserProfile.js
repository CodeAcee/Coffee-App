import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserInformation from "../components/Profile/UserInformation";
import { GlobalStyles } from "../contasns/theme";
import CardList from "../components/UI/CardList/CardList";
import LargeButton from "../components/UI/Buttons/LargeButton";

const UserProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.userProfileContainer}>
      <Text style={styles.userProfileText}>Личная Информация</Text>
      <UserInformation />
      <View style={styles.underline}></View>
      <Text style={styles.userProfileText}>Cпобос оплаты</Text>
      <CardList />
      <LargeButton iconName={"add"} iconSize={24}>
        Добавить Карту
      </LargeButton>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  userProfileContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  userProfileText: {
    fontSize: 18,
    color: "black",
    fontFamily: GlobalStyles.fonts.medium,
    marginBottom: 20,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "80%",
    marginVertical: 20,
  },
});
