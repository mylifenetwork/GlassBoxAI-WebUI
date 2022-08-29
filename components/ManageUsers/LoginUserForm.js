import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input from "./Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";

function LoginUserForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleLicense, setvehicleLicense] = useState("");

  function loginUserHandler() {

  }; 

  
  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }
 
  function vehicleLicenseChangedHandler(enteredLicenseNum) {
    setvehicleLicense(enteredLicenseNum);
  }

  return (
    <KeyboardAwareScrollView>
      <View>
       
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

       
      </View>
      <Button onPress={loginUserHandler}>Login</Button>
    </KeyboardAwareScrollView>
  );
}

export default LoginUserForm;

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
