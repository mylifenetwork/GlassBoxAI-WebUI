import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground } from "react-native";
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
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";

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
          <TouchableOpacity onPress={showCalendarHandler} style={[{transform:[{scale:0.7}]}]}>
          <Image source={require("../assets/Images/calendar.png")}></Image>
        </TouchableOpacity>
          <TouchableOpacity style={styles.leftContainer}>
          <Image source={require("../assets/Images/left.png")}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.leftContainer}>
          <Image source={require("../assets/Images/right.png")}></Image>
        </TouchableOpacity>
        </View>
        <ScrollView>
        <AlertCard></AlertCard>

        </ScrollView>
        {/* <View style={styles.rectangleContainer}>        
        <View style={styles.SummaryText}>
          <Text>
            Daily Summary        
          </Text>
          </View>
            </View> */}


        
        {/* <View style={[{ opacity: pressed ? 1 : 0 },{}]}>
          <Calendar></Calendar>
        </View>
                <ScrollView>
          <View style={styles.middleContainer}>
             <AlertCard style={styles.card}></AlertCard>
        
          <ScoreCard style={styles.card}></ScoreCard>
          </View>
         
        </ScrollView>*/}
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
  SummaryText:{
    backgroundColor:"#353948",
    borderColor:"white",
    paddingBottom:"15%"
    

  },
  rectangleContainer:{
    width:317,
    borderColor:"white",
    height:"20%",
    borderWidth: 2,

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
