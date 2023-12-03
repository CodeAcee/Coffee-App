import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View style={styles.mapContainer}>
      <Text>Map</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 50,
  },
});
