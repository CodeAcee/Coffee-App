import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../contasns/theme";

const CardListItem = ({ item, key }) => {
  const transformNumberCard = "****" + item.numberCard.substr(-4);

  return (
    <View key={key} style={styles.cardListItemContainer}>
      <Text style={styles.itemText}>{item.typeCard}</Text>
      <Text style={styles.itemText}>{transformNumberCard}</Text>
    </View>
  );
};

export default CardListItem;

const styles = StyleSheet.create({
  cardListItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: GlobalStyles.colors.regularGreen,
    borderWidth: 1,
    width: 320,
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
  },
  itemText: {
    fontSize: GlobalStyles.sizes.font,
    color: GlobalStyles.colors.regularGreen,
  },
});
