import { StatusBar, StyleSheet, Text, View } from "react-native";
import LoginUserForm from "../components/ManageUsers/LoginUserForm";
import { GlobalStyles } from "../styles/styles";

function LoginForm({ navigation }) {
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.welcomeText}>Welcome Back !</Text>
          <Text style={styles.accountText}>Login to your account</Text>
          <Text style={styles.descriptionText}>
            Enter your phone number and license plate number to get back in the
            app
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formInfo}>Login</Text>
          <LoginUserForm/>
        </View>
      </View>
    </>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent: "flex-start",
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 7,
    marginBottom: 12,
    marginTop: 2,
  },
  form: {
    flex: 3,
    margin: 7,
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  welcomeText: {
    fontFamily: "K2D-Regular",
    color: GlobalStyles.colors.primary50,
    fontSize: 19,
  },
  descriptionText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
    textAlign:'center',
  },
  formInfo: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
});
