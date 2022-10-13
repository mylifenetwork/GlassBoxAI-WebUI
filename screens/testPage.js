import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import DonutPie from "../components/UI/DonutPie";
// import Slider from "../components/UI/Slider";
import React, { useState,useRef} from "react";
import { setStatusBarHidden } from 'expo-status-bar'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Circle } from "react-native-svg";

function Home({ navigation }) {
  function showSignUpFormHandler() {
    navigation.navigate("SignUp");
  }

  function showLoginFormHandler() {
    //navigation.navigate("Login");
    navigation.navigate("Overall");
    //navigation.navigate("Journey");
  }

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
        {/* <Slider></Slider> */}
        <VideoPlayer
        style={{ height: 160,videoBackgroundColor: 'transparent'}}
        timeVisible={true}
        textStyle={{color:"#A1DADC"}}
        activityIndicator={{size:"large"}}
        icon={{
         color:"#A1DADC",
          play:
          <View style={styles.Circle}></View>,
      }}
      onPlaybackStatusUpdate={status => setStatus(() => status)}
  videoProps={{

    
    shouldPlay: false,
    resizeMode: ResizeMode.CONTAIN,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}>
    </VideoPlayer>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
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
