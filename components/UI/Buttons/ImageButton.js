import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageButton = ({ name, price, imageUrl }) => {
  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  container: {},
  titleContainer: {},
  image: {},
  titleText: {},
  priceText: {},
  pressed: {},
});
