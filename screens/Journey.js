import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import TotalTime from "../components/UI/TotalTime";
import LastJourney from "../components/UI/LastJourney";
import ScoreCard from "../components/UI/ScoreCard";
import DropdownBox from "../components/UI/DropdownBox";
import Calendar from "../components/UI/Calendar";
import { ButtonGroup } from "@rneui/base";
import { useState, React, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AlertCard from "../components/UI/AlertCard";
import { getAuth } from "firebase/auth";
import { firebaseConfig, db } from "../config";
import { getApp } from 'firebase/app';
import { collection, addDoc, doc, getDoc, getDocs, setDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import moment from 'moment';
// import DateRange from "../components/UI/DateRange";
// import CalendarController from "../components/UI/CalendarController";
// import Test from "./testPage";
import CalendarButton from "../components/UI/CalendarButton";
var cardlist=[]
var data2 = [
  { label: '', value: '1' },
 
];
const summarydata = [{
  trips: 0,
  distances: 0,
  time: 0,
  alert: 0,
}]
var runningitem=null;
var refreshinterval=null;
function Journey() {

  const buttons = ['Day', 'Week', 'Month'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userid, setUserid] = useState("");
  const [cardsstate, setcardsstate] = useState(0);
  const calendarType = { 2: "monthYear", 0: "day", 1: "week" };
  const change = { 2: false, 0: true, 1: true };
  const [update, setupdate] = useState(0);
  const [hasrunning, sethasrunning] = useState(0);
  const [summaryupdate, setSummaryupdate] = useState(0);
  useEffect(()=>{
    navigation.addListener("blur", payload => {
      console.log("journey blur")
      clearInterval(refreshinterval);
    });
    navigation.addListener("focus", payload => {
      console.log("journey focus")
      getdata();
      
    });
    const t = setInterval(() => {
      setupdate(moment());
      console.log("update:"+update);
    }, 5000)

    return () => {  // 每次卸载都执行此函数，清楚定时器
      clearTimeout(t)
    }
    //getdata();
  }, [])

  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]
  const navigation = useNavigation();
  function showDetailedJourneyPageHandler() {
    navigation.navigate("DetailedJourney");
    console.log("debug")
  }
  const [mode, setMode] = useState("day");

 
function updatethis()
{
  console.log("update")
  //setupdate(update+1);
}
  
  
  async function getdata() {
    cardlist=[]
    data2=[]
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
    data2.push({label: license, value: '1'})
    console.log(data2)
    const journeyRef = collection(db, "Journey");
    // Create a query against the collection.
    const q = query(journeyRef, where("license", "==", license));
  
   /* const unsubscribe = onSnapshot(q, (querySnapshot) => {
      cardlist=[]
      querySnapshot.forEach((doc) => {
        var item=doc.data();
        var score=parseInt(item.score);
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
        timedelta=((item.endTime.seconds-item.startTime.seconds)/60).toFixed(2);
      
        alltrip++;
        alltime+=timedelta;
        if(item.distance!=null)
        alldistance+=(item.distance/1000)
        allalerts+=item.alertnum
        if(item.endTime!=null)
        item.during=((item.endTime.seconds-item.startTime.seconds)/60).toFixed(2);
        else
        item.during=0;
        if(item.isrunning!=null&&item.isrunning==1)
        {
         hasrunning=true;
         runningitem=item;
         sethasrunning(1);
         console.log("has running")
        }else
        cardlist.push(item);
      }
      );
      cardlist.sort((a, b) => b.startTime.seconds-a.startTime.seconds)
      console.log(cardlist)
      alldistance=alldistance.toFixed(2);
      summarydata[0].trips=alltrip;
      summarydata[0].distances=alldistance;
      summarydata[0].duration=alltime;
      summarydata[0].alert=allalerts;
      setsummaryupdate(summaryupdate+1);
    });*/
    const querySnapshot = await getDocs(q);
    var hasrunning= false;
    var alltrip=0
    var alltime=0;
    var alldistance=0
    var allalerts=0
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      var item=doc.data();
      var score=parseInt(item.score);
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
      timedelta=(item.endTime.seconds-item.startTime.seconds)/3600;
      alltrip++;
      if(item.is_finished!=null&&item.is_finished==true)
      {
        alltime+=timedelta;
      }
      if(item.distance!=null)
      alldistance+=(item.distance/1000)
      allalerts+=item.alertnum
      if(item.endTime!=null)
      item.during=((item.endTime.seconds-item.startTime.seconds)/60).toFixed(2);
      else
      item.during=0;
      if(item.is_finished!=null&&item.is_finished==false)
      {
       hasrunning=true;
       runningitem=item;
       //sethasrunning(1);
       console.log("has running")
      }
      cardlist.push(item);
    }
    );
    cardlist.sort((a, b) => b.startTime.seconds-a.startTime.seconds)
    console.log(cardlist)
    alldistance=alldistance.toFixed(2);
    summarydata[0].trips=alltrip;
    summarydata[0].distances=alldistance;
    summarydata[0].duration=alltime.toFixed(2);
    summarydata[0].alert=allalerts;
    
    refreshinterval=setInterval(async()=>{
      
      cardlist=[]
      const querySnapshot = await getDocs(q);
      var hasrunning= false;
      var alltrip=0
      var alltime=0;
      var alldistance=0
      var allalerts=0
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        var item=doc.data();
        var score=parseInt(item.score);
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
        timedelta=(item.endTime.seconds-item.startTime.seconds)/3600;
      
        alltrip++;
        if(item.is_finished!=null&&item.is_finished==true)
        {
          alltime+=timedelta;
        }
       
        if(item.distance!=null)
        alldistance+=(item.distance/1000)
        allalerts+=item.alertnum
        if(item.endTime!=null)
        item.during=((item.endTime.seconds-item.startTime.seconds)/60).toFixed(2);
        else
        item.during=0;
        if(item.is_finished!=null&&item.is_finished==false)
        {
         hasrunning=true;
         runningitem=item;
         //sethasrunning(1);
         console.log("has running")
        }
        cardlist.push(item);
      }
      );
      cardlist.sort((a, b) => b.startTime.seconds-a.startTime.seconds)
      console.log(cardlist)
      alldistance=alldistance.toFixed(2);
      summarydata[0].trips=alltrip;
      summarydata[0].distances=alldistance;
      summarydata[0].duration=alltime.toFixed(2);
      summarydata[0].alert=allalerts;
      var next=summaryupdate+1
      //setSummaryupdate(next);
     // setcardsstate(cardsstate+1)
      //console.log(next)
      updatethis();
    },15000)
    
    //setSummaryupdate(summaryupdate+1);
    console.log(summaryupdate)
    //setupdate(false);
    //setcardsstate(cardsstate+1);
    updatethis();
  }

  function showCalendarHandler() {
    if (pressed) {
      setPressed(0);
    } else {
      setPressed(1);
    }

  }


  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    navigation.navigate("AccountPage");
  }
  function showDetailsHandler() {
    navigation.navigate("DetailedJourney");
  }



  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.formHeader}>
            <DropdownBox data={data2}></DropdownBox>
            {/* <ButtonGroup
              containerStyle={styles.buttonGroupContainer}
              buttonStyle={styles.button}
              buttons={buttons}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
                setMode(calendarType[value]);
                console.log(value, calendarType[value]);
              }}
            /> */}
            {/* <View style={styles.CalendarConatiner}>
              <View style={styles.dateCintainer}>
                <Text style={styles.formInfo}>
                  Friday
                </Text>
                <Text style={styles.dateText}>July 15, 2022</Text>
              </View> */}
              {/* <DateRange mode={mode}></DateRange> */}
              {/* <CalendarButton type={calendarType[selectedIndex]}></CalendarButton> */}
              {/* <Test multiple={calendarType[selectedIndex]}></Test> */}
              {/* <CalendarController type={calendarType[selectedIndex]}></CalendarController> */}
              {/* <Calendar type={calendarType[selectedIndex]} change={change[selectedIndex]}></Calendar> */}
              {/* <TouchableOpacity style={styles.leftContainer}>
                <Image source={require("../assets/Images/left.png")} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.leftContainer}>
                <Image source={require("../assets/Images/right.png")}></Image>
              </TouchableOpacity>
            </View> */}
            <View style={styles.Summary}>
              <Text style={styles.SummaryText}>
                Daily Summary
              </Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={styles.verticalContainer}>
                <Text style={styles.title}>
                  Trips
                </Text>
                <Text style={styles.SummaryText}>
                  {summarydata[0].trips}
                </Text>
              </View>

              <View style={styles.verticalContainer}>
                <Text style={styles.title}>
                  Distances
                </Text>
                <Text style={styles.SummaryText}>
                  {summarydata[0].distances} km
                </Text>
              </View>

              <View style={styles.verticalContainer}>
                <Text style={styles.title}>
                  Time
                </Text>
                <Text style={styles.SummaryText}>
                  {summarydata[0].duration} h
                </Text>
              </View>

              <View style={styles.verticalContainer}>
                <Text style={styles.title}>
                  Alert
                </Text>
                <Text style={styles.SummaryText}>
                  {summarydata[0].alert}
                </Text>
              </View>
            </View>

            <View style={styles.middleContainer}>
            {/* {hasrunning==1?<ScoreCard style={styles.card} color={runningitem.color} scores={runningitem.score} startTime={moment(runningitem.startTime.seconds*1000).format("HH:mm") } endTime={moment(runningitem.endTime.seconds*1000).format("HH:mm") } noAlert={runningitem.alertnum} distance={(runningitem.distance/1000).toFixed(2)} duration={runningitem.during} running={true} alldata={runningitem}></ScoreCard>:""} */}
              { 
                cardlist.map(item=>(
                  <ScoreCard style={styles.card} color={item.color} scores={item.score} startTime={moment(item.startTime.seconds*1000).format("HH:mm") } endTime={item.is_finished?moment(item.endTime.seconds*1000).format("HH:mm"):"" } noAlert={item.alertnum} distance={(item.distance/1000).toFixed(2)} duration={item.during} onPress={showDetailsHandler} alldata={item} running={item.is_finished==false}></ScoreCard>
                ))
              }
             
            </View>
          </View>
        </ScrollView>
        {/* <View style={[{ opacity: pressed ? 1 : 0 },{marginBottom:pressed ? "100%":0},{zIndex:100}]}>
          <Calendar></Calendar>
        </View> */}


        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.homeContainer} onPress={showOverallPageHandler} >
              <Image source={require("../assets/home2.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeContainer} onPress={showMiddleButtonHandler} >
              <Image source={require("../assets/journey1.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeContainer} onPress={showPersonalPageHandler} >
              <Image source={require("../assets/user1.png")} />
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </>
  );
}

export default Journey;

const styles = StyleSheet.create({
  middleContainer: {
    // flex:-15,
  },
  verticalContainer: {
    /*flexDirection: "col",*/
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
    marginHorizontal: "5%"
  },
  title: {
    color: "white",
    fontFamily: "K2D-Regular",
    fontSize: 14,
    textAlign: "center",
    /*fontWeight: 300,*/
    marginBottom: "5%"
  },
  calendarIcon: {
    transform: [{ scale: 0.7 }],
    //marginLeft:"2.5%"

  },
  Summary: {
    backgroundColor: "#353948",
    right: "25%",
    zIndex: 100
  },
  SummaryText: {
    color: "white",
    fontFamily: "K2D-Regular",
    //position:"absolute",
    fontSize: 18,
    /*fontWeight: 700,*/
    zIndex: 1
  },
  rectangleContainer: {
    // flex:-10,
    width: 317,
    borderColor: "white",
    borderRadius: 8,
    height: "auto",
    borderWidth: 2,
    transform: [{ translateY: -10 }],
    flexWrap: 'wrap',
    flexDirection: "row"

  },
  leftContainer: {
    margin: "2.5%",

    backgroundColor: "white",
    width: 32,
    height: 32,
  },
  dateCintainer: {
    marginRight: "15%"

  },
  CalendarConatiner: {
    flexDirection: "row",
    flex: 2.5,
    alignItems: "flex-start",
  },
  buttonGroupContainer: {
    flexWrap: 'wrap',
    backgroundColor: "white",
    borderRadius: 6,
    width: 317,
    marginBottom: "5%"


  },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent: 'flex-start'
  },
  // middleContainer:{
  //   flex: 2,
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   marginHorizontal:7,
  //   marginBottom:12,
  //   marginTop:2,

  // },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 7,
    marginBottom: 12,
    marginTop: 2,
  },
  form: {
    flex: 5,
    margin: 7,
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  dateText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 18,
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
    alignContent: "center",
    marginBottom: "7.5%",
    zIndex: 0,
  },
  buttonContainer: {
    flex: 0.8,
    flexDirection: 'row',
    align: "center",
    justifyContent: 'space-between'
  },
  homeContainer: {
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
    // marginLeft:"5%",
    // marginTop:"5%",
    /*fontWeight: "700",*/
    fontSize: 18,
  },
  location: {
    flexDirection: 'row',
    color: "white",
    fontFamily: "K2D-Regular",
    // textAlign:"left",
    // marginLeft:"5%",
    fontSize: 14,
  },
  signContainer: {
    felx: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  imageContainer: {
    felx: 0.4,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card: {
    width: "70%",
    height: "50px",
    alignItems: "center"

  }
});
