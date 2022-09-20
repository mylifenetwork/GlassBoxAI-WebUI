import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GlobalStyles } from "./styles/styles";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Home from "./screens/Home";
import SignUpForm from "./screens/SignUpForm";
import LoginForm from "./screens/LoginForm";
import SignUpOTPAuth from "./screens/SignUpOTPAuthScreen";
import OverallPage from "./screens/OverallPage";
import Journey from "./screens/Journey";
import { StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "K2D-Regular": require("./assets/fonts/K2D-Regular.ttf"),
    "K2D-Bold": require("./assets/fonts/K2D-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.rootBackground}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpForm}
              options={{
                title: "Get Started",
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginForm}
              options={{
                title: "Get Started",
              }}
            />
            <Stack.Screen
              name="signUp-OTP-Auth"
              component={SignUpOTPAuth}
              options={{
                title: "Get Started",
              }}
            />
            <Stack.Screen
              name="Overall"
              component={OverallPage}
              options={{
                title:"Overall score",
              }}
            />
            <Stack.Screen
              name = "Journey"
              component={Journey}
              options={{
                title:"Journey",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootBackground: {
    flex: 1,
    backgroundColor: "#353948",
  },
});
