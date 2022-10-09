import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import ScoreBoard from "../components/UI/ScoreBoard";
import DropdownBox from "../components/UI/DropdownBox";
import MapView, { PROVIDER_GOOGLE,Polyline,Marker } from 'react-native-maps';
import { useState,React } from "react";
import AlertCard from "../components/UI/AlertCard";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";
import { proc } from "react-native-reanimated";

function DetailedJourney() {
  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  // const origin = {latitude: 22.3375, longitude: 114.2630};
  // const destination = {latitude: 22.2843, longitude: 114.1555};
  const w = Dimensions.get("window")["width"];
  const h = Dimensions.get("window")["height"];
  const ratio = w/h; 
  const delta1 = Math.abs(origin.latitude - destination.latitude)/2;
  const delta2 = Math.abs(origin.longitude-destination.longitude)/2;
  //delta1/delta2;
  console.log(delta1,delta2)
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
            <MapViewDirections origin={origin} 
            destination = {destination}
            strokeColor="red"
            strokeWidth={3}
            apikey = {GOOGLE_MAPS_APIKEY}
            ></MapViewDirections>


          </MapView>
        <View style={styles.bottomContainer}>
        <AlertCard style={styles.card}></AlertCard>
        <AlertCard style={styles.card}></AlertCard>
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
  card:{
    width:"70%",
    height:"50",
    alignItems:"center",
    // marginTop:"200%"
  }
});