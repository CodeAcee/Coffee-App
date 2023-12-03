import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import CardListItem from "./CardListItem";
import { dummyCards } from "../../../dummy/dummyCafeData";

const CardList = () => {
  return (
    <ScrollView contentContainerStyle={styles.cardList}>
      {dummyCards.map((item) => (
        <CardListItem item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default CardList;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
