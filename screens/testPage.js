import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import DonutPie from "../components/UI/DonutPie";

function Home({ navigation }) {
  function showSignUpFormHandler() {
    navigation.navigate("SignUp");
  }

  function showLoginFormHandler() {
    //navigation.navigate("Login");
    navigation.navigate("Overall");
    //navigation.navigate("Journey");
  }

  return (
    <View style={styles.container}>
        <DonutPie></DonutPie>
     
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  footerContainer: {
    felx: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontFamily: "K2D-Regular",
  },

  footerImage: {
    width: 200,
    height: 100,
  },

  mainImage: {
    width: 100,
    height: 100,
  },

  button: {
    minWidth: 150,
  },
});
