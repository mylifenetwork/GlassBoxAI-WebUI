import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import DonutPie from "../components/UI/DonutPie";
// import Slider from "../components/UI/Slider";
import React, { useState,useRef,Component} from "react";
import { setStatusBarHidden } from 'expo-status-bar';
import Swiper from "react-native-swiper";

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
      <Swiper style={styles.wrapper}
      dotStyle={{
        backgroundColor: 'white',
        margin:3

      }}
      activeDotStyle={
        {backgroundColor: '#A1DADC', 
        width: 19, height: 6,  
        margin:3
        // marginLeft: "2.5%", marginRight: "2.5%", marginTop: "2.5%", marginBottom: "2.5%",
      }}
      >
        <View style={styles.slide1}>
          {/* <Text style={styles.text}>Hello Swiper</Text> */}
          <Image source={require("../assets/Images/swiperImage1.png")}></Image>
        </View>
        <View style={styles.slide2}>
        <Image source={require("../assets/Images/swiperImage2.png")}></Image>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>



        {/* <Slider></Slider> */}
        {/* <VideoPlayer
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
    </VideoPlayer> */}
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
