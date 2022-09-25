import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import ScoreBoard from "../components/UI/ScoreBoard";
import DropdownBox from "../components/UI/DropdownBox";
import MapView, { PROVIDER_GOOGLE,Polyline } from 'react-native-maps';
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
        <View style={styles.formHeader}>
        <DropdownBox data={data2}></DropdownBox>
        <ScoreBoard></ScoreBoard>
        </View>

        {/* <View style={styles.bottomContainer}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapContainer}
          ></MapView>
        </View> */}
        <ScrollView>
        <View style={styles.bottomContainer}>
        <AlertCard style={styles.card}></AlertCard>
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
    //width:317,
    transform:[{scaleX:0.9},{scaleY:0.6}],
    borderRadius:12,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,

  },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'space-evenly'
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal:7,
    marginBottom:12,
    marginTop:2,
  },
  bottomContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  form: {
    flex: 5,
    margin:7,
  },
  footerContainer: {
    felx: 1,
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
    alignItems:"center"
  }
});