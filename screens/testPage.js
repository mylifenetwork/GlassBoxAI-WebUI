import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import DonutPie from "../components/UI/DonutPie";
// import Slider from "../components/UI/Slider";
import React, { useState,useRef,Component,use} from "react";
import { setStatusBarHidden } from 'expo-status-bar';
import Swiper from "react-native-swiper";
import { collection, addDoc,doc,getDoc,query,where } from "firebase/firestore"; 
import { db } from "../config";

function Home({ navigation }) {
  const[test,setTest]=useState("");
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
const checkExistedUder=async ()=>{
  const docRef = doc(db, "users", "KhEKgrOxu9dL7EkgC8de2lZokp22");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

}

  async function getAlertsInfo(){
  const userID="KhEKgrOxu9dL7EkgC8de2lZokp22";
  const journeyID="JKUe1lI72c2VlUc7AUeS";
  const docRef = doc(db, "Journey", journeyID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    //console.log("Document data:", docSnap.data());
    if(data["userid"]!=userID){
      console.log("wrong USER ID")
    }else{
      console.log(data["alerts"])
    }
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }



}

const apple = getAlertsInfo().then((res)=> {return res})

console.log("test",apple)
//console.log("Document written with ID: ", docRef.id);

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Button onPress={sendData}>
        send data
      </Button>
      <Button onPress={checkExistedUder}>
        checkExistedUder
      </Button>
      <Button>
        getAlertsInfo
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
