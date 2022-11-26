import { firebaseConfig } from "../../config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import RadioButton from "../UI/RadioButton";
import Input from "../ManageUsers/Input"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";
import { Image, View, Platform,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalDeleteAccount from "./ModalDeleteAccount";
import React, { useState, useEffect } from 'react';

function Profile({userInfo={
    name:"Peter Lau",
    role:"Commercial driver",
    phone:"98857243",
    vehicle:["TC7391","TC7321"]
}}) {
  const [phoneNumber,setPhoneNumber]=useState(userInfo.phone);



  function resetInputs() {
  }




  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }
  // function passwordChangeHandler(enteredPassword){
  //   //setPassword(enteredPassword);
  //   setCode(enteredPassword);
  // }

  return (
    <KeyboardAwareScrollView>
      <View>
        <Input
          iconConfig={{
            name: "person-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={userInfo.name}
          id={"Name"}
          input={false}   
        />
        <Input
          iconConfig={{
            name: "seatbelt-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={userInfo.role}
          id={"Identity"}
          input={false}   
        />
        <Input
          iconConfig={{
            name: "call-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: userInfo.phone,
            keyboardType: "phone-pad",
            onChangeText: phoneNumChangedHandler,
            placeholderTextColor:"white",
            value: phoneNumber,
          }}
          id={"Phone\nNumber"} 
          input={false}
        />
      <Button customStyle={styles.customButton}>Done</Button>
      <ModalDeleteAccount></ModalDeleteAccount>
      <TouchableOpacity style={{marginBottom:"30%"}}>
              <Text style={styles.hyperText}>
                Delete account 
              </Text>
            </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  customButton:{
    width:"30%",
    marginTop:"30%",
    alignSelf:"center"
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
