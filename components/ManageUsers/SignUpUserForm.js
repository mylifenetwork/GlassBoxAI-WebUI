import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import RadioButton from "../UI/RadioButton";
import Input from "./Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";

import SignUpFormValidation from "../../util/SignUpFormValidation";

function SignUpUserForm({ signUpOTPAuth }) {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleLicense, setvehicleLicense] = useState("");

  const [privateUser, setPrivateUser] = useState(false);
  const [commercialOwner, setCommercialOwner] = useState(false);
  const [commercialDriver, setCommercialDriver] = useState(false);

  function signUpFormSubmissionHandler() {
    const userData = {
      name: userName,
      phoneNumber: phoneNumber,
      email: email,
      vehicleLicense: vehicleLicense,
      role: checkUserRole(),
    };

    const formInputsAreValid = SignUpFormValidation(userData);

    if (!formInputsAreValid) {
      Alert.alert("Inavlid Inputs", "Please check your inputs");
      return;
    }

    resetInputs();
    signUpOTPAuth();
  }

  function resetInputs() {
    setUserName('');
    setPhoneNumber('');
    setEmail('');
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

  return (
    <KeyboardAwareScrollView>
      <View>
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
            keyboardType: "email-address",
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
      <Button onPress={signUpFormSubmissionHandler}>Next</Button>
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
