import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import TotalTime from "../components/UI/TotalTime";
import LastJourney from "../components/UI/LastJourney";
import ScoreCard from "../components/UI/ScoreCard";
import DropdownBox from "../components/UI/DropdownBox";
import Calendar from "../components/UI/Calendar";
import { ButtonGroup } from "@rneui/base";
import { useState,React } from "react";
import AlertCard from "../components/UI/AlertCard";

function Journey({navigation}) {

  const buttons = ['Day', 'Week', 'Month'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]

  const [pressed,setPressed] = useState(0);

  const data2 = [
    { label: 'TC7391', value: '1' },
    { label: 'BV9203333', value: '2' },
  ];

  const summarydata=[{
    trips:3,
    distances:38,
    time:"1h 13m",
    alert:2
  }]

  function showCalendarHandler(){
    if(pressed){
      setPressed(0);
    }else{
      setPressed(1);
    }
    
  }
  

  function showOverallPageHandler() {
    navigation.navigate("Login");
  }
  function showMiddleButtonHandler() {
    //navigation.navigate("Overall");
  }
  function showPersonalPageHandler() {
    //navigation.navigate("Overall");
  }
  
  
  
  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.formHeader}>
        <DropdownBox data={data2}></DropdownBox>
        <ButtonGroup
            containerStyle={styles.buttonGroupContainer}
            buttonStyle ={styles.button}
            buttons = {buttons}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
          />
        <View style={styles.CalendarConatiner}>
          <View style={styles.dateCintainer}>
            <Text style={styles.formInfo}> 
              Friday
            </Text>
            <Text style={styles.dateText}>July 15, 2022</Text>
          </View>
          <TouchableOpacity onPress={showCalendarHandler} style={styles.calendarIcon}>
          <Image source={require("../assets/Images/calendar.png")}></Image>
        </TouchableOpacity>
          <TouchableOpacity style={styles.leftContainer}>
          <Image source={require("../assets/Images/left.png")}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.leftContainer}>
          <Image source={require("../assets/Images/right.png")}></Image>
        </TouchableOpacity>
        </View>
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
              {summarydata[0].time}
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

        <ScrollView>
          <View style={styles.middleContainer}>
          <ScoreCard style={styles.card}></ScoreCard>
          <ScoreCard style={styles.card}></ScoreCard>
          </View>
        </ScrollView>
        </View>
        <View style={[{ opacity: pressed ? 1 : 0 },{marginBottom:"50%"}]}>
          <Calendar></Calendar>
        </View>
        

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

export default Journey;

const styles = StyleSheet.create({
  middleContainer:{
    // flex:-15,
  },
  verticalContainer:{
    flexDirection:"col",
    alignItems:"center",
    marginTop:"5%",
    marginBottom:"5%",
    marginHorizontal:"5%"
  },
  title:{
    color:"white",
    fontFamily: "K2D-Regular",
    fontSize:14,
    textAlign:"center",
    fontWeight:300,
    marginBottom:"5%"
  },
  calendarIcon:{
    transform:[{scale:0.7}],
    // marginLeft:"2.5%"

  },
  Summary:{
    backgroundColor:"#353948", 
    right:"25%",
    zIndex:100
  },
  SummaryText:{
    color:"white",
    fontFamily: "K2D-Regular",
    //position:"absolute",
    fontSize:18,
    fontWeight:700,
    zIndex:100
  },
  rectangleContainer:{
    flex:-10,
    width:317,
    borderColor:"white",
    borderRadius:8,
    height:"auto",
    borderWidth: 2,
    transform:[{translateY:-10}],
    flexWrap: 'wrap',
    flexDirection:"row"

  },
  leftContainer:{
    margin:"2.5%",

    backgroundColor:"white",
    width:32,
    height:32,
  },
  dateCintainer:{
    marginRight:"15%"

  },
  CalendarConatiner:{
    flexDirection:"row",
    flex:2.5
    //alignItems:"flex-start"
  },
  buttonGroupContainer:{
    flexWrap: 'wrap',
    backgroundColor:"white",
    borderRadius: 6,
    width:317,
    marginBottom:"5%"


  },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start'
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
    marginHorizontal:7,
    marginBottom:12,
    marginTop:2,
  },
  form: {
    flex: 5,
    margin:7,
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  dateText: {
    fontFamily: "K2D-Regular",
    color:"white",
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
    // textAlign:"left",
    // marginLeft:"5%",
    // marginTop:"5%",
    fontWeight:"700",
    fontSize:18,
  },
  location: {
    flexDirection: 'row', 
    color: "white",
    fontFamily: "K2D-Regular",
    // textAlign:"left",
    // marginLeft:"5%",
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
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    flexWrap: 'wrap', 
    alignItems: 'center',   
  },
  card:{
    width:"70%",
    height:"50",
    alignItems:"center"

  }
});
