import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import TotalTime from "../components/UI/TotalTime";
import LastJourney from "../components/UI/LastJourney";
import Donut from "../components/UI/Donut";
import MapComponent from "../components/UI/MapComponent";
import DonutPie from "../components/UI/DonutPie";
import MapView,{PROVIDER_GOOGLE,Polyline,Marker } from 'react-native-maps';
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";

function OverallPage({navigation}){
  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]
  

  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    navigation.navigate("AccountPage");
  }
  
    // const location = Geolocation.getCurrentPosition();
  
  
  return (
    <> 
      <StatusBar barStyle="light-content" />
       
      <View style={styles.container}>        
        
        <ScrollView>
<View style={styles.chart}>
          <DonutPie></DonutPie>
        </View>
        <View style={styles.formHeader}>
        
        
        

        
        
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.text}>Current Location</Text>
          <Text style={styles.location}>2km Wah · Chai Car Park</Text>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapContainer}
            initialRegion={{
                latitude:22.279909,
                longitude:114.173729}}
          >
            <Marker coordinate = {{latitude: 22.279909,longitude: 114.173729}}

            pinColor = {"black"} // any color
            title={"title"}
            description={"description"}
            >
              <Image style={styles.marker} source={require("../assets/Images/location-pin.png")}></Image>

            </Marker>

          
          </MapView>

            <View style={styles.totalContainer}>
           <Text style={styles.text}>Total journey: 10</Text>
            <TotalTime></TotalTime>
            <LastJourney></LastJourney>
           </View>


        </View>
        </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeContainer}  onPress={showOverallPageHandler} >
          <Image source={require("../assets/home.png")}/>
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

export default OverallPage;

const styles = StyleSheet.create({
  marker:{
      //shadowColor: '#353948',
        // shadowOpacity: 0.8,
        // shadowRadius: 0.1, 
        //transform:[{scale:0.6}]

  },
  mapContainer:{
    //width:317,
    marginBottom:"85%",
    transform:[{scaleX:0.9},{scaleY:0.5}],
    borderRadius:12,
    ...StyleSheet.absoluteFillObject,

  },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start'
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // marginHorizontal:7,
    // marginBottom:12,
    // marginTop:2,
    margintop:"-100%"
  },
  locationContainer:{
    marginTop:"5%",
    flex:4,
    justifyContent:"flex-start",
    // alignItems:"center"
  },
  totalContainer:{
    flex:1,
    justifyContent:"flex-start",
    marginTop:"45%"
  },
  form: {
    flex: 5,
    margin:7,
    transform:[{scale:0.9}]
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  welcomeText: {
    fontFamily: "K2D-Regular",
    color: GlobalStyles.colors.primary50,
    fontSize: 19,
  },
  descriptionText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
  formInfo: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
  footerContainer: {
    felx: 1,
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
    // textAlign:"left",
    marginLeft:"5%",
    marginBottom:"2.5%",
    fontWeight:"700",
    fontSize:18,
  },
  location: {
    flexDirection: 'row', 
    color: "white",
    fontFamily: "K2D-Regular",
    // textAlign:"left",
    marginLeft:"5%",
    fontSize:14,
  },
  signContainer:{
    felx: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  imageContainer:{
    felx: 0.4,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  chart:{
    marginTop:"-25%",
    height:"50%",
    transform:[{scale:0.8}],
    marginBottom:"-25%"
  }
});
