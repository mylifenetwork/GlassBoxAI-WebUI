import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { GlobalStyles } from "../styles/styles";
import ScoreBoard from "../components/UI/ScoreBoard";
import DropdownBox from "../components/UI/DropdownBox";
import MapView, { PROVIDER_GOOGLE,Polyline,Marker, Callout } from 'react-native-maps';
import { useState,React,useEffect } from "react";
import AlertCard from "../components/UI/AlertCard";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/UI/Button";
import MapViewDirections from "react-native-maps-directions";
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";
import { proc } from "react-native-reanimated";
import Controller from "../components/ManageUsers/Controller"

function DetailedJourney() {
  const [req,setReq]=useState("");
  // useEffect(()=>{
  //   getAlertsInfo().then((res)=>{setReq(res["alerts"])})
  // },[req,setReq])
  // getAlertsInfo().then((res)=>{setReq(res["alerts"]);}).catch(error => console.log(error));


  //console.log(req)

  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]

  const alertInfo={braking:["Braking","08:35:10"],speeding:["Speeding","08:35:10"]}  
  const alertPoints={braking:{
    latitude:22.279461,
    longitude:114.181240,
  },speeding:{
    latitude:22.296852, 
    longitude:114.242031,
  }}
  const alertImage={
    braking:[require("../assets/Images/brakingPin.png")],
    speeding:[require("../assets/Images/speedingPin.png")]
  }
  // const origin = {latitude: 37.3318456, longitude: -122.0296002};
  // const destination = {latitude: 37.771707, longitude: -122.4053769};
  const origin = {latitude: 22.3375, longitude: 114.2630};
  const destination = {latitude: 22.2843, longitude: 114.1555};
  const w = Dimensions.get("window")["width"];
  const h = Dimensions.get("window")["height"];
  const ratio = w/h; 
  const delta1 = Math.abs(origin.latitude - destination.latitude)/2;
  const delta2 = Math.abs(origin.longitude-destination.longitude)/2;
  //delta1/delta2;
  //console.log(delta1,delta2)
  const initial_position={
    latitude:(origin.latitude+destination.latitude)/2, 
    longitude: (origin.longitude+destination.longitude)/2,
    latitudeDelta:delta1*1.1/ratio,
    longitudeDelta:delta2*1.1/(ratio),
  }
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBQS9yHLvLPhOyNTLQ179LkCci5XlZ-RS4';

  const data2 = [
    { label: 'TC7391', value: '1' },
    { label: 'BV9203333', value: '2' },
  ];
  
  const navigation = useNavigation();
  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    navigation.navigate("AccountPage");
  }
  
  
  
  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
      <ScrollView overScrollMode="auto">
        <View style={styles.formHeader}>
        <DropdownBox data={data2}></DropdownBox>
        <ScoreBoard></ScoreBoard>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapContainer}
            //initialRegion={initial_position}
            region={initial_position
            }
            >
            <Marker coordinate = {destination}>
            <Image style={styles.marker} source={require("../assets/Images/locationEnd.png")}></Image>
            </Marker>
            <Marker coordinate = {origin}>
            <Image style={styles.marker} source={require("../assets/Images/locationStart.png")}></Image>
            </Marker>

              {Object.keys(alertPoints).map(k=>
              <Marker coordinate = {alertPoints[k]} 
              // image = {alertImage[k][0]}
              >
              <Image style={styles.markerPin} source={alertImage[k][0]}></Image>
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text>{alertInfo[k][0]} | {alertInfo[k][1]}</Text>
                    <Image source={require("../assets/Images/alertInfoImage.png")}></Image>
                    <View style={styles.rowConatiner}>
                      <Button customStyle={styles.button}>
                      Image
                    </Button>
                    <Button customStyle={styles.button}>
                      Video
                    </Button>
                    </View>
                    
                  </View>
                  <View style={styles.arrowBorder}></View>
                  <View style={styles.arrow}></View>
                </View>

              </Callout>
              </Marker>
              )}

            <MapViewDirections origin={origin} 
            destination = {destination}
            strokeColor="red"
            strokeWidth={3}
            apikey = {GOOGLE_MAPS_APIKEY}
            ></MapViewDirections>


          </MapView>
        <View style={styles.bottomContainer}>
        <Controller></Controller>

{/* <AlertCard style={styles.card}></AlertCard> */}
        </View>
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

export default DetailedJourney;

const styles = StyleSheet.create({
  rowConatiner:{
    flexDirection:"row",
    alignContent:"space-around"

  },
  titleText:{
    textAlign:"center",
    fontFamily: "K2D-Regular",
    fontWeight:"300",
    fontSize:12,

  },
  arrow:{
    backgroundColor:"transparent",
    borderColor:"transparent",
    borderTopColor:"#fff",
    borderWidth:16,
    alignSelf:"center",
    marginTop:-32

  },
  arrowBorder:{
    backgroundColor:"transparent",
    borderColor:"transparent",
    borderTopColor:"#007a87",
    borderWidth:16,
    alignSelf:"center",
    marginTop:-0.5
  },
  bubble:{
    flexDirection:"col",
    alignSelf:"flex-start",
    backgroundColor:"#fff",
    borderRadius:6,
    borderColor:"#ccc",
    borderWidth:0.5,
    padding:10,
    width:"100%",
    marginTop:"120%"

  },
  mapContainer:{
    // flex:5,
    //width:317,
    // transform:[{scaleX:0.9},{scaleY:0.6}],
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:"60%",
    ...StyleSheet.absoluteFillObject,
    height:"50%"

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
    marginBottom:"7.5%",
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
  card:{
    width:"70%",
    height:"50",
    alignItems:"center",
    // marginTop:"200%"
  },
  markerPin:{

  }
});