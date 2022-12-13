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
import { getDate } from "date-fns";
import { getApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { firebaseConfig, db } from "../config";
import { collection, addDoc, doc, getDoc, getDocs, setDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useState, React, useEffect } from "react";
import moment from 'moment';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
var cardlist=[]
var summarydata = [{
  trips: 0,
  distances: 0,
  time: 0,
  alert: 0,
  score:0,
}]
var refreshinterval=null;
function OverallPage(){

  const [summaryupdate, setsummaryupdate] = useState(0);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();


 
  
    // const location = Geolocation.getCurrentPosition();
     useEffect(() => {
      (async () => {
       
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(location);
        refreshinterval=setInterval(async() => {
          let location = await Location.getCurrentPositionAsync({});
          console.log(location)
          setLocation(location);
        }, 1000);
       
          navigation.addListener("blur", payload => {
          console.log("overall blur");
          clearInterval(refreshinterval);
        });
        navigation.addListener("focus", payload => {
          console.log("overall focus");
          clearInterval(refreshinterval);
          refreshinterval=setInterval(async() => {
            let location = await Location.getCurrentPositionAsync({});
            console.log(location)
            setLocation(location);
          }, 1000);
        });
        getData();
        
      })();
    }, []);
    function showOverallPageHandler() {
      navigation.navigate("Overall");
    }
    function showMiddleButtonHandler() {
      navigation.navigate("Journey");
    }
    function showPersonalPageHandler() {
      navigation.navigate("AccountPage");
    }
    const data = [{
      percentage: 80,
      color: 'tomato',
      max: 100
    }]
  async function getData(){
    cardlist=[]
    const app = getApp();
    const auth = getAuth(app);
    const user = auth.currentUser;
    var userid="";
    if (user) {
      console.log(user.uid);
      //setUserid(user.uid);
      userid=user.uid;
    }
    else {
      console.log("not login");
      return;
    }

    const docRef = doc(db, "users", userid);
    const docSnap = await getDoc(docRef);
    var license = ""
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      license = docSnap.data().liscense
      console.log(license);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    const journeyRef = collection(db, "Journey");
    // Create a query against the collection.
    const q = query(journeyRef, where("license", "==", license));
    const querySnapshot = await getDocs(q);
    var hasrunning= false;
    var alltrip=0
    var alltime=0;
    var alldistance=0
    var allalerts=0
    var allscore=0
    var index=0;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      index++;
      var item=doc.data();
      var score=parseInt(item.score);
      allscore+=score;
      if(score>0&&score<60)
        item.color="red";
      else if(score>60&&score<80)
        item.color="yellow";
      else
        item.color="green";
      console.log(item.startTime)
      item.alertnum=0;
      item.alertnum+=item.alerts.acceleration.alert;
      item.alertnum+=item.alerts.barking.alert;
      item.alertnum+=item.alerts.cornering.alert;
      item.alertnum+=item.alerts.distanceWithinCars.alert;
      item.alertnum+=item.alerts.speeding.alert;
      item.alertnum+=item.alerts.withinLanes.alert;
      var timedelta=0;
      if(item.endTime!=null)
      timedelta=((item.endTime.seconds-item.startTime.seconds)/60).toFixed(2).toString();
    
      alltrip++;
      
      if(item.distance!=null)
      alldistance+=(item.distance/1000)
      allalerts+=item.alertnum
      if(item.endTime!=0)
      item.during=((item.endTime.seconds-item.startTime.seconds)/3600);
      else
      item.during=0;
      alltime+=item.during;
      cardlist.push(item);
    }
    );
    if(cardlist.length>0)
    {
      cardlist.sort((a, b) => b.startTime.seconds-a.startTime.seconds)
      console.log(cardlist[0])
      alldistance=alldistance.toFixed(2).toString();
      summarydata[0].trips=alltrip;
      summarydata[0].distances=alldistance;
      summarydata[0].time=alltime.toFixed(2).toString();
      summarydata[0].alert=allalerts;
      summarydata[0].score=allscore/index;
    }
    setsummaryupdate(summaryupdate+1);
  }
  return (
    
    <> 
      <StatusBar barStyle="light-content" />
       
      <View style={styles.container}>        
        
        <ScrollView>
<View style={styles.chart}>
          <DonutPie scores={summarydata[0].score.toFixed(2).toString()}></DonutPie>
        </View>
        <View style={styles.formHeader}>
        
        
        

        
        
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.text}>Current Location</Text>
          <Text style={styles.location}>LOCATING.....</Text>
          {!location?null: <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapContainer}
            region={ !location
              ? {
                latitude: 22.279909,
                  longitude: 114.173729,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                  
                }
              : {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.025,
                  longitudeDelta: 0.025,
                }}
          >
            <Marker
          coordinate={
            !location
              ? {
                latitude: 22.279909,
                  longitude: 114.173729,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                  
                }
              : {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                
                }
                
          } pinColor = {"black"} // any color
          title={"title"}
          description={"description"}>
             <Image style={styles.marker} source={require("../assets/Images/location-pin.png")}></Image>
             </Marker>
            {/* <Marker coordinate = {{latitude: 22.279909,longitude: 114.173729}}

            pinColor = {"black"} // any color
            title={"title"}
            description={"description"}
            >
              <Image style={styles.marker} source={require("../assets/Images/location-pin.png")}></Image>

            </Marker> */}

          
          </MapView>}
        
            <View style={styles.totalContainer}>
           <Text style={styles.text}>Total journey: {summarydata[0].trips.toString()}</Text>
            <TotalTime  hours={summarydata[0].time.toString()} distance={summarydata[0].distances.toString()}></TotalTime>
            <LastJourney startDate={cardlist.length>0?moment(cardlist[0].startTime.seconds*1000).format("YYYY MM DD | HH:mm"):null} endDate={cardlist.length>0?moment(cardlist[0].endTime.seconds*1000).format("YYYY MM DD | HH:mm"):null} 
            duration={cardlist.length>0?cardlist[0].during.toFixed(2).toString()+" hour":null} distance={cardlist.length>0?((cardlist[0].distance)/1000).toFixed(2).toString()+" km":null}></LastJourney>
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
    height:"40%",
    transform:[{scaleX:1},{scaleY:1}],
    borderRadius:12,
    ...StyleSheet.absoluteFillObject,

  },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start',
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
    marginTop:"60%"
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
   
    fontSize:18,
  },
  location: {
    flexDirection: 'row', 
    color: "white",
    fontFamily: "K2D-Regular",
    // textAlign:"left",
    marginLeft:"5%",
    fontSize:28,
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
