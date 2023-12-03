import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderList from "../components/UI/OrderList/OrderList";

const Orders = () => {
  return (
    <View style={styles.ordersContainer}>
      <OrderList />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  ordersContainer: {
    alignItems: "center",
  },
});
