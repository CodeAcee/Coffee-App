import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons/build/Icons";
import { GlobalStyles } from "../../../contasns/theme";

const width = Dimensions.get("window").width;

const OrderListItem = ({
  id,
  status,
  name,
  coffee,
  size,
  dops,
  amount,
  price,
}) => {
  return (
    <View style={styles.orderListContainer}>
      <View style={styles.headerItem}>
        <Text style={styles.orderText}>
          Заказ № 22 <Ionicons name="reload" size={18} />
        </Text>
        <Text style={styles.orderPrice}>26 UAH</Text>
      </View>
      <Text style={styles.orderCoffeeShop}>Три бобра</Text>
      <View style={styles.orderCoffeeInfo}>
        <View style={styles.orderCoffeeInfoSub}>
          <Image
            style={styles.coffeeImage}
            source={{
              uri: "https://i.pinimg.com/736x/e8/7e/9f/e87e9f17df857cf6f28a90909792151e.jpg",
            }}
          />
          <View style={styles.orderCoffeeNameContainer}>
            <Text style={styles.orderCoffeeName}>Капучино</Text>
            <Text style={styles.orderCoffeeSize}>стандарный</Text>
          </View>
        </View>
        <Text style={styles.orderCoffeeAmount}>x1</Text>
      </View>
      <Text style={styles.orderStatus}>
        Обработка Заказа
        <Ionicons
          name="reload"
          size={18}
          color={GlobalStyles.colors.regularGreen}
        />
      </Text>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  orderListContainer: {
    width: width - 50,
    height: width / 2.1,
    padding: 20,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: GlobalStyles.shadows.medium.shadowColor,
    shadowOpacity: GlobalStyles.shadows.medium.shadowOpacity,
    shadowRadius: GlobalStyles.shadows.medium.shadowRadius,
    shadowOffset: GlobalStyles.shadows.medium.shadowOffset,
  },
  headerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerItemOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  coffeeImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  orderCoffeeInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderCoffeeInfoSub: {
    flexDirection: "row",
    alignItems: "start",
  },
  orderCoffeeShop: {
    marginBottom: 10,
    fontSize: GlobalStyles.sizes.medium,
  },
  orderCoffeeNameContainer: {
    marginLeft: 15,
  },
  orderCoffeeName: {
    fontSize: 20,
    fontFamily: GlobalStyles.fonts.regular,

    color: GlobalStyles.colors.regularGreen,
  },
  orderCoffeeSize: {
    fontSize: 18,
    fontFamily: GlobalStyles.fonts.regular,
    color: GlobalStyles.colors.gray,
  },
  orderStatus: {
    alignSelf: "flex-end",
    color: GlobalStyles.colors.regularGreen,
  },
  orderCoffeeAmount: {
    fontSize: GlobalStyles.sizes.medium,
    color: GlobalStyles.colors.regularGreen,
  },
  orderPrice: {
    fontFamily: GlobalStyles.fonts.regular,
    color: GlobalStyles.colors.gray,
    fontSize: GlobalStyles.sizes.medium,
  },
  orderText: {
    color: GlobalStyles.colors.gray,
    fontSize: GlobalStyles.sizes.font,
  },
});
