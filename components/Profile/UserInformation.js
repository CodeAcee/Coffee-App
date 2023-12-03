import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../UI/Inputs/Input";

const UserInformation = () => {
  return (
    <View>
      <Input label={"Имя"} />
      <Input label={"Город"} />
      <Input label={"Номер Телефона"} />
      <Input label={"Email"} />
    </View>
  );
};

export default UserInformation;

const styles = StyleSheet.create({});
