import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import ScoreBoard from "../components/UI/ScoreBoard";
import DropdownBox from "../components/UI/DropdownBox";
import MapView, { PROVIDER_GOOGLE,Polyline,Marker } from 'react-native-maps';
import { useState,React } from "react";
import AlertCard from "../components/UI/AlertCard";
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";

function DetailedJourney({navigation}) {
  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]

  const data2 = [
    { label: 'TC7391', value: '1' },
    { label: 'BV9203333', value: '2' },
  ];
  

  function showOverallPageHandler() {
    navigation.navigate("Login");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Overall");
  }
  function showPersonalPageHandler() {
    navigation.navigate("Overall");
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
            initialRegion={{
              lattitude:22.279909,longitude: 114.173729}}>
            <Marker coordinate = {{lattitude:22.279909,longitude: 114.173729}}
              >
            <Image style={styles.marker} source={require("../assets/Images/locationStart.png")}></Image>
            </Marker>
            <Marker coordinate = {{lattitude: 22.28408117,longitude: 114.15884825}}
              >
            <Image style={styles.marker} source={require("../assets/Images/locationEnd.png")}></Image>
            </Marker>
            <MapViewDirections origin={{lattitude:22.279909,longitude: 114.173729}} 
            destination = {{lattitude: 22.28408117,longitude: 114.15884825}}
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
          <Image source={require("../assets/home.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showOverallPageHandler} >
          <Image source={require("../assets/journey1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showOverallPageHandler} >
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
    flexGrow: 100,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height:"300%"
    // marginHorizontal:7,
    // marginBottom:12,
    // marginTop:2,
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