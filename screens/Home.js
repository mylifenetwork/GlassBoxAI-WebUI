import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";

function Home({ navigation }) {
  function showSignUpFormHandler() {
    navigation.navigate("SignUp");
  }

  function showLoginFormHandler() {
    navigation.navigate("Login");
    //navigation.navigate("Overall");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/Images/insuranceCompany.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button customStyle={styles.button} onPress={showSignUpFormHandler}>
          New User
        </Button>
        <Button
          customStyle={styles.button}
          onPress={showLoginFormHandler}
          mode="flat"
        >
          Returning User
        </Button>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.text}>Powered By</Text>
        </View>
        <View>
          <Image
            style={styles.footerImage}
            source={require("../assets/Images/GlassboxAIIcon.png")}
          />
        </View>
      </View>
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
