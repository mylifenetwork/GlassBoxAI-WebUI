import { StatusBar, StyleSheet, Text, View } from "react-native";
import SignUpUserForm from "../components/ManageUsers/SignUpUserForm";
import { GlobalStyles } from "../styles/styles";

function SignUpForm() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.welcomeText}>Welcome !</Text>
          <Text style={styles.accountText}>Create a user account</Text>
          <Text style={styles.descriptionText}>
            Enter your information to create a new account
          </Text>
        </View>
        
        
        <View style={styles.form}>
          {/* <Text style={styles.formInfo}>User Information</Text> */}
          <SignUpUserForm/>
        </View>
      </View>
    </>
  );
}

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start'
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal:7,
    marginBottom:12,
    marginTop:2,
  },
  form: {
    flex: 5,
    margin:7,
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
  },
  formInfo: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
});
