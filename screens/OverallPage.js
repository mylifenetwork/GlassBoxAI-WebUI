import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import TotalTime from "../components/UI/TotalTime";
import LastJourney from "../components/UI/LastJourney";
import Donut from "../components/UI/Donut";
import { ScrollableComponent } from "react-native-keyboard-aware-scroll-view";

function OverallPage({navigation}) {

  const data = [{
    percentage: 80,
    color: 'tomato',
    max: 100
  }]
  

  function showOverallPageHandler() {
    navigation.navigate("Journey");
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
        
        <View style={styles.chart}>
        {data.map((p, i) => {
          return <Donut key={i} percentage={p.percentage} color={p.color} max={p.max}/>
        })}
        </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.text}>Current Location</Text>
          <Text style={styles.location}>2km Wah · Chai Car Park</Text>
          <View>
            <Text style={styles.text}>Total journey: 10</Text>
            <TotalTime></TotalTime>
            <LastJourney></LastJourney>
          </View>


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

export default OverallPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start'
  },
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
  }
});
