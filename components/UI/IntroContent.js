import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../contasns/theme";

const IntroContent = ({ image, title, subTitle, key }) => {
  return (
    <View key={title} style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.contentTitle}>{title}</Text>
      <Text style={styles.contentSubtitle}>{subTitle}</Text>
    </View>
  );
};

export default IntroContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
  },
  contentTitle: {
    fontFamily: GlobalStyles.fonts.medium,
    fontSize: GlobalStyles.sizes.medium,
    marginTop: 20,
    marginBottom: 10,
  },
  contentSubtitle: {
    fontFamily: GlobalStyles.fonts.regular,
    fontSize: GlobalStyles.sizes.font + 5,
    color: GlobalStyles.colors.gray,
    marginVertical: 20,
    textAlign: "center",
  },
});
