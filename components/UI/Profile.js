import Input from "../ManageUsers/Input"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";
import { Image, View, Platform,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalDeleteAccount from "./ModalDeleteAccount";
import React, { useState, useEffect } from 'react';

function Profile({userInfo={
    name:"Peter Lau",
    role:"Commercial driver",
    phone:"98857243",
    vehicle:["TC7391","TC7321"]
}}) {
  const navigation = useNavigation();
  const [phoneNumber,setPhoneNumber]=useState(userInfo.phone);

  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }

  function handleDone(){
    navigation.navigate("AccountPage");
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
      <Button customStyle={styles.customButton} onPress={handleDone}>Done</Button>
      <ModalDeleteAccount styles={styles.modalContainer}></ModalDeleteAccount>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  modalContainer:{

  },
  container: {
    marginTop: 8,
  },
  customButton:{
    width:"35%",
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
