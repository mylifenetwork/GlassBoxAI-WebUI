import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { GlobalStyles } from "../styles/styles";
import ScoreBoard from "../components/UI/ScoreBoard";
import DropdownBox from "../components/UI/DropdownBox";
// import { SliderBox } from "react-native-image-slider-box";
import { useState,React,Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import Button from "../components/UI/Button";
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";

function VideoPlayback() {
  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]

  const data2 = [
    { label: 'TC7391', value: '1' },
    { label: 'BV9203333', value: '2' },
  ];

  const info={alert:"Braking",
  happen:"08:35:10",
  start:"08:35:00",
  end:"08:35:20",
  position:"Price Edward",
  speedBefore: "73 km/h",
  speedAfter:"23 km/h",
  timeDelta:"2",
  alertTime:"10s"

};

 
  const navigation = useNavigation();
  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    // navigation.navigate("Overall");
  }
  
  
  
  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
      <ScrollView overScrollMode="auto">
        <View style={styles.formHeader}>
        <DropdownBox data={data2}></DropdownBox>
        <ScoreBoard></ScoreBoard>
        <View style={styles.line}></View>

        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>Alert: </Text>
            <Text style={styles.content}>{info["alert"]}</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.title}>Alert happen</Text>
            <Text style={styles.content}>{info["happen"]}</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.title}>Start: </Text>
            <Text style={styles.content}>{info["start"]}</Text>
            <Text style={styles.title}> - End: </Text>
            <Text style={styles.content}>{info["end"]}</Text>
          </View>

          <View style={styles.rowContainer}>
            <Image source={require("../assets/Images/Exclude.png")}></Image>
            <Text style={styles.content}>{info["position"]}</Text>
          </View>
          
        </View>
        <View style={styles.lineB}></View>

        <View>
          <View style={styles.rowContainer}>
            <Image source={require("../assets/Images/alertSmall.png")}></Image>
            <Text style={[styles.title,{alignSelf:"center", marginLeft:"2.5%"}]}>
              {info["alert"]}
            </Text>
          </View>
          <Text style={[styles.content,{marginLeft:"10%"}]} numberOfLines={2}>
          Your speed was greatly reduced from {info["speedBefore"]} to {info["speedAfter"]} in {info["timeDelta"]} seconds
          </Text>
        </View>

        <View style={styles.videoContainer}>
            <VideoPlayer
                style={{ height: 160,videoBackgroundColor: 'transparent'}}
                timeVisible={true}
                textStyle={{color:"#A1DADC"}}
                activityIndicator={{size:"large"}}
                icon={{
                color:"#A1DADC",
                play:<View style={styles.Circle}></View>}}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                videoProps={{
                shouldPlay: false,
                resizeMode: ResizeMode.STRETCH,
                // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                source: {
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
                }}>
            </VideoPlayer>
        </View>
        {/* <View style={styles.bottomContainer}>
        <AlertCard style={styles.card}></AlertCard>
        <AlertCard style={styles.card}></AlertCard>
        </View> */}
        </View>
        </ScrollView>


      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeContainer}  onPress={showOverallPageHandler} >
          <Image source={require("../assets/home2.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showMiddleButtonHandler} >
          <Image source={require("../assets/journey1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showPersonalPageHandler} >
          <Image source={require("../assets/user1.png")}/>
          </TouchableOpacity> 
        </View>
      </View>
        

      </View>
    </>
  );
}

export default VideoPlayback;

const styles = StyleSheet.create({
  videoContainer:{
    width:"95%",
    marginTop:"5%"


  },
  infoContainer:{
    marginRight:"42.5%"
  },
  content:{
    color: "white",
    fontFamily: "K2D-Regular",
    fontWeight:"300",
    fontSize:14,
    marginLeft:"2.5%"
  },
  title:{
    color: "white",
    fontFamily: "K2D-Regular",
    fontWeight:"700",
    fontSize:14,
    // marginLeft:"2.5%"
  },
    rowContainer:{
      flexDirection:"row",
      marginTop:"5%"
      // alignItems:"flex-start",
  },
    line:{
        borderWidth: 0.7,
        borderColor:'#EBEBEB',
        width: "200%",
        marginTop:"5%",
        // marginBottom:"2.5%"

    },
    lineB:{
        borderWidth: 1,
        borderColor:'#EBEBEB',
        width: "100%",
        marginTop:"5%",
        // marginBottom:"2.5%"

    },
  container: {
     flex: 1,
    //  flexGrow: 100,
    backgroundColor: "#353948",
    justifyContent:'space-evenly',
    height:"300%"
  },
  formHeader: {
    // flexGrow: 100,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // height:"300%"
    marginHorizontal:7,
    marginBottom:12,
    marginTop:2,
  },
  bottomContainer:{
    height:"100%",
    position:"relative",
    transform:[{translateY:300}]
  },

  footerContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    align: "center",
    alignContent:"center",
    marginBottom:"5%",
  },
  buttonContainer:{
    flex: 0.8,
    flexDirection: 'row',
    align: "center",
    justifyContent: 'space-between'
  },
  homeContainer:{
    felx: 0.3,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },

  text: {
    flexDirection: 'row', 
    color: "white",
    fontFamily: "K2D-Regular",
    fontWeight:"700",
    fontSize:18,
  },
  Circle:{
    height : 50,
    width :50,
    position:"absolute",
    backgroundColor:'white',
    borderRadius: 50/2,
    // marginLeft:-7.5,
},
});