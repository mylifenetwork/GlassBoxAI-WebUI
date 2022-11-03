import { StatusBar, StyleSheet, Text, View, TextInput, Pressable, Keyboard,Alert } from "react-native";
import { GlobalStyles } from "../styles/styles";
import {useState, useRef, useEffect} from 'react'
import OTPInputField from "../components/OTPInput.js/OTPInputField";
import Button from "../components/UI/Button";
import { storeUser } from "../http/http";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

function SignUpOTPAuthScreen({route, navigation }) {
  console.log(route.params.verificationId);
const [code, setCode] = useState("");
const [pinReady, setPinReady] = useState(false);
const MAX_CODE_LENGTH = 6;


// this function will authenticate OTP that is generated from the backend 
function authenticateOTP() {
  console.log('Code authenticated');

}; 


// function for addijng a new user to the database. 
function addNewUserHandler() {
  // if authentication is successful then add the user to the database 
  authenticateOTP(); 
  console.log(route.params);
  storeUser(route.params);
  

}
const confirmCode=()=>{
  const credential = firebase.auth.PhoneAuthProvider.credential(
    route.params.verificationId,
    code
  );
  firebase.auth().signInWithCredential(credential)
  .then(()=>{
    setCode ("");
  })
  .catch((error)=>{
    //show an alert msg
    alert(error);
  })
  Alert.alert("login successful!")
  navigation.navigate("Overall");
}


 
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.welcomeText}>One more step</Text>
          <Text style={styles.descriptionText}>
            Enter the OTP code we have sent to your entered phone number
          </Text>
        </View>

        <Pressable style={styles.otpInputForm} onPress={Keyboard.dismiss}>
          
            <OTPInputField
              setPinReady={setPinReady}
              code={code}
              setCode={setCode}
              maxLength={MAX_CODE_LENGTH}
            />
          
        </Pressable>

        <Button onPress={confirmCode} customStyle={styles.buttonStyle}>Done</Button>
      </View>
    </>
  );
}

export default SignUpOTPAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent: 'flex-end',
    alignItems:'center', 
    
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 7,
    marginBottom: 12,
    marginTop: 2,
  },
  otpInputForm: {
    flex:3,
    margin: 2,
    justifyContent:'flex-start', 
    alignItems:'center',
    
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  welcomeText: {
    fontFamily: "K2D-Regular",
    color: GlobalStyles.colors.primary50,
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  formInfo: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 7,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "white",
  },
  cellText: {
    color: "white",
    fontFamily: "K2D-Regular",
    fontSize: 28,
    textAlign: "center",
  },

  buttonStyle: {
    width:100, 
    height:40,
  }
});
