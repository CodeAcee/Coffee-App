import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import { GlobalStyles } from "../../../contasns/theme";

const CoffeeList = ({ listData, title }) => {
  return (
    <View style={styles.verticalListContainer}>
      <Text style={styles.verticalListTitle}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.verticalList}
        horizontal={true}
        scrollEnabled={true}
        scrollIndicatorInsets={false}
        data={listData}
        renderItem={({ item }) => (
          <ListItem
            imageSrc={item.image}
            name={item.name}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CoffeeList;

const styles = StyleSheet.create({
  verticalListTitle: {
    textAlign: "left",
    marginLeft: 20,
    marginVertical: 5,
    fontSize: GlobalStyles.sizes.medium,
    fontFamily: GlobalStyles.fonts.semiBold,
    color: GlobalStyles.colors.regularGreen,
  },
  verticalListContainer: {
    backgroundColor: GlobalStyles.colors.white,
    height: 250,
    shadowColor: GlobalStyles.shadows.medium.shadowColor,
    shadowOpacity: GlobalStyles.shadows.medium.shadowOpacity,
    shadowRadius: GlobalStyles.shadows.medium.shadowRadius,
    shadowOffset: GlobalStyles.shadows.medium.shadowOffset,
    justifyContent: "center",
    marginVertical: 15,
  },
});
