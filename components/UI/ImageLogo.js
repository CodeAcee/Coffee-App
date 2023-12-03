import { StyleSheet, Image } from "react-native";
import React from "react";

const ImageLogo = () => {
  return (
    <Image
      style={styles.image}
      source={require("../../assets/images/logo.jpg")}
    />
  );
};

export default ImageLogo;

const styles = StyleSheet.create({
  image: {
    marginBottom: 60,
  },
});
