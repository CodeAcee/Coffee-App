import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoffeeOverwiev from "./screens/CoffeeOverwiev";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { Entypo } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Support from "./screens/Support";
import OtpScreen from "./screens/OtpScreen";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecentOrders from "./screens/RecentOrders";
import UserProfile from "./screens/UserProfile";
import MyTabBar from "./components/UI/Buttons/TabGroup";
import ProfileForm from "./screens/ProfileForm";
import Intro from "./screens/Intro";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoSemiBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Black.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  onLayoutRootView();

  if (!appIsReady) {
    return null;
  }

  if (!loaded) return null;

  function Profile() {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar hidden />
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name="Мои данные" component={UserProfile} />
          <Tab.Screen name="История Заказов" component={RecentOrders} />
        </Tab.Navigator>
      </GestureHandlerRootView>
    );
  }

  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerTransparent: true }}
        initialRouteName="Intro"
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen
          options={{ headerShown: true, title: "Support" }}
          name="Support"
          component={Support}
        />
      </Stack.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CoffeeOverwiev" component={CoffeeOverwiev} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddCard" component={ProfileForm} />
      </Stack.Navigator>
    );
  }

  function Navigation() {
    const authState = useSelector((state) => state.auth);
    return (
      <NavigationContainer screenOptions={{}}>
        {!authState.isAuth && <AuthStack />}
        {authState.isAuth && <AuthenticatedStack />}
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
