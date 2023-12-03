import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";

const ListItem = ({ imageSrc = "", name, description }) => {
  return (
    <View style={styles.verticalListItem}>
      <Image
        style={styles.verticalListImage}
        source={require("../../../assets/images/download.jpeg")}
      />
      <Text style={styles.vertivalListItemText}>{name}</Text>
      <Text style={styles.vertivalListItemSubText}>
        {description ? description.substr(0, 35) + "..." : ""}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  vertivalListItemText: {
    fontSize: 22,
    fontWeight: 400,
    fontFamily: GlobalStyles.fonts.regular,
    color: GlobalStyles.colors.regularGreen,
    marginVertical: 5,
  },
  vertivalListItemSubText: {
    fontSize: GlobalStyles.sizes.font,
    fontFamily: GlobalStyles.fonts.regular,
    color: GlobalStyles.colors.gray,
  },
  verticalListImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  verticalListItem: {
    width: 170,
    height: 120,
    margin: 10,
  },
});
