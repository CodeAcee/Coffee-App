import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { GlobalStyles } from "../../../contasns/theme";

const MainSlider = () => {
  const width = Dimensions.get("window").width;

  const imageData = [
    {
      url: "https://img.freepik.com/free-photo/top-view-coffee-cup-with-copy-space_23-2148255048.jpg?size=626&ext=jpg&ga=GA1.2.1878129582.1682014873&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-photo/top-view-cup-coffee-with-copy-space_23-2148255031.jpg?size=626&ext=jpg&ga=GA1.2.1878129582.1682014873&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-photo/person-pouring-milk-into-cup-coffee_1286-180.jpg?size=626&ext=jpg&ga=GA1.2.1878129582.1682014873&semt=sph",
    },
  ];

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        loop
        width={width - 50}
        height={width / 2}
        autoPlay={true}
        style={{ borderRadius: 20 }}
        data={imageData}
        scrollAnimationDuration={3000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Image
                style={{ width: width, height: width / 2 }}
                source={{ uri: item.url }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default MainSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.white,
    padding: 20,
  },
});
