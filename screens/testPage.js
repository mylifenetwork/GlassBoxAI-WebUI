import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import DonutPie from "../components/UI/DonutPie";
// import Slider from "../components/UI/Slider";
import React, { useState,useRef,Component} from "react";
import { setStatusBarHidden } from 'expo-status-bar';
import Swiper from "react-native-swiper";
import { collection, addDoc,doc } from "firebase/firestore"; 
import { db } from "../config";

function Home({ navigation }) {
  function showSignUpFormHandler() {
    navigation.navigate("SignUp");
  }

  function showLoginFormHandler() {
    //navigation.navigate("Login");
    navigation.navigate("Overall");
    //navigation.navigate("Journey");
  }

// Add a new document with a generated id.
const sendData=async ()=>{
  await addDoc(collection(db,"users"),{
      name:"apple",
      email:"apple@gmail.com"
  });

}
//console.log("Document written with ID: ", docRef.id);

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Button onPress={sendData}>
        send data
      </Button>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"100%"
    // backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  Circle:{
    height : 50,
    width :50,
    position:"absolute",
    backgroundColor:'white',
    borderRadius: 50/2,
    // marginLeft:-7.5,
},
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
