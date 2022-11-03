import { View, Text, StyleSheet, Alert } from "react-native";
import { useState,useRef } from "react";
import RadioButton from "../UI/RadioButton";
import Input from "./Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";

import SignUpFormValidation from "../../util/SignUpFormValidation";
import { getAuth, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { firebaseConfig } from "../../config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import React from "react";

function SignUpUserForm({ signUpOTPAuth }) {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleLicense, setvehicleLicense] = useState("");
  const [password,setPassword] = useState("");

  const [privateUser, setPrivateUser] = useState(false);
  const [commercialOwner, setCommercialOwner] = useState(false);
  const [commercialDriver, setCommercialDriver] = useState(false);

  const [verificationId, setVerificationId]=useState("");
  const [code,setCode]=useState("");
  const recaptchaVerifier = useRef(null);

  function signUpFormSubmissionHandler() {
    const userData = {
      name: userName,
      phoneNumber: phoneNumber,
      email: email,
      vehicleLicense: vehicleLicense,
      verificationId:verificationId,
      role: checkUserRole(),
    };

    const formInputsAreValid = SignUpFormValidation(userData);

    if (!formInputsAreValid) {
      Alert.alert("Inavlid Inputs", "Please check your inputs");
      return;
    }

    
    // firebase.auth().settings.appVerificationDisabledForTesting = true;
    // var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
      .then(setVerificationId);
      setPhoneNumber("");
      console.log("vid",verificationId);
      resetInputs();
      signUpOTPAuth(userData);
    
  }
  const confirmCode=()=>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    console.log("id",verificationId);
    firebase.auth().signInWithCredential(credential)
    .then(()=>{
      setCode ("");
    })
    .catch((error)=>{
      //show an alert msg
      alert(error);
    })
    Alert.alert("login successful!")
  }

  function resetInputs() {
    setUserName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setvehicleLicense('');
    setPrivateUser(false);
    setCommercialDriver(false);
    setCommercialOwner(false);
  }

  function checkUserRole() {
    if (privateUser) {
      return "Private";
    } else {
      if (commercialDriver) {
        return "Commercial Driver";
      } else {
        return "Commercial Owner";
      }
    }
  }

  function privateOwnerbutton() {
    setPrivateUser(true);
    setCommercialDriver(false);
    setCommercialOwner(false);
  }
  function commercialOwnerButton() {
    setPrivateUser(false);
    setCommercialDriver(false);
    setCommercialOwner(true);
  }
  function commercialDriverButton() {
    setPrivateUser(false);
    setCommercialDriver(true);
    setCommercialOwner(false);
  }

  function userNameChangedHandler(enteredName) {
    setUserName(enteredName);
  }
  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }
  function emailChangedHandler(enteredEmail) {
    setEmail(enteredEmail);
  }
  function vehicleLicenseChangedHandler(enteredLicenseNum) {
    setvehicleLicense(enteredLicenseNum);
  }
  // function passwordChangeHandler(enteredPassword){
  //   //setPassword(enteredPassword);
  //   setCode(enteredPassword);
  // }

  return (
    <KeyboardAwareScrollView>
      <View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        >

        </FirebaseRecaptchaVerifierModal>
        <Input
          iconConfig={{
            name: "person-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Name",
            keyboardType: "default",
            onChangeText: userNameChangedHandler,
            value: userName,
          }}
        />
        <Input
          iconConfig={{
            name: "call-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Phone Number",
            keyboardType: "phone-pad",
            onChangeText: phoneNumChangedHandler,
            value: phoneNumber,
          }}
        />
        <Input
          iconConfig={{
            name: "mail-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Email Address",
            keyboardType: "email-address",
            onChangeText: emailChangedHandler,
            value: email,
          }}
        />
        <Input
          iconConfig={{
            name: "car-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Vehicle License Plate Number",
            //placeholder: "Code",
           // keyboardType: "email-address",
            onChangeText: vehicleLicenseChangedHandler,
            value: vehicleLicense,
          }}
        />

        <View style={styles.container}>
          <Text style={styles.roleContainer}>Select your role</Text>
          <View style={styles.buttonContainers}>
            <RadioButton
              checkOption={privateUser}
              onPress={privateOwnerbutton}
              title="Private"
            />
            <RadioButton
              checkOption={commercialDriver}
              onPress={commercialDriverButton}
              title="Commercial Driver"
            />
            <RadioButton
              checkOption={commercialOwner}
              onPress={commercialOwnerButton}
              title="Commercial Owner"
            />
          </View>
        </View>
      </View>
      <Button onPress={signUpFormSubmissionHandler}>Send Verification Code</Button>
      {/* <Button onPress={confirmCode}>Confirm Code</Button> */}
    </KeyboardAwareScrollView>
  );
}

export default SignUpUserForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },

  roleContainer: {
    color: "white",
  },
  buttonContainers: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
