import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = () => {
  return (
    <View style={styles.orderListContainer}>
      <FlatList
        contentContainerStyle={styles.verticalList}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={["1", "2"]}
        renderItem={({ item }) => (
          <OrderListItem
            imageSrc={item.image}
            name={item.name}
            description={item.description}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  orderListContainer: {
    marginVertical: 30,
  },
});
