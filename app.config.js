export default {
  expo: {
    name: "coffee-quick",
    slug: "coffee-quick",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "cover",
      backgroundColor: "#fff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
  extra: {
    firebaseApiKey: "AIzaSyDeoQXZQtxsbnDqnGaH7YMQLPFHbDjSdTg",
    firebaseAuthDomain: "react-native-course-361f5.firebaseapp.com",
    firebaseDatabaseURL:
      "https://react-native-course-361f5-default-rtdb.firebaseio.com",
    firebaseProjectId: "react-native-course-361f5",
    firebaseStorageBucket: "react-native-course-361f5.appspot.com",
    firebaseMessagingSenderId: "812685260298",
    firebaseAppId: "1:812685260298:web:311664b0d65a153c45d1f3",
  },
};
