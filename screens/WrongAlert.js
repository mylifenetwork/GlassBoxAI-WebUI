import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

function WrongAlert({
    caseNo = 121,
    summarydata=[{
        date: "July 15,2022",
        time:"08:51 AM",
        status: "Pending"
      }]
}){
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

  function showCapturedImagePageHandler(){
    navigation.navigate("CapturedImage");
  }
  
    // const location = Geolocation.getCurrentPosition();
  
  
  return (
    <> 
      <StatusBar barStyle="light-content" />
       
      <View style={styles.container}>        
        
        <ScrollView>
        <View style={styles.formHeader}>
        <View style={styles.Summary}>
          <Text style={styles.caseText}>
            Case no. {caseNo}        
          </Text>
          </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.verticalContainer}>
            <Text style={styles.title}>
              Date
            </Text>
            <Text style={styles.SummaryText}>
              {summarydata[0].date}
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
              Status
            </Text>
            <Text style={[styles.SummaryTextA,
                summarydata[0].status=== "Complete" && styles.SummaryTextB]}>
               <View style={[styles.dotContainerA, 
                summarydata[0].status=== "Complete" && styles.dotContainerB,]}>
                </View>
              {summarydata[0].status}
            </Text>
          </View>

           
        </View>
        <TouchableOpacity onPress={showCapturedImagePageHandler}>
            <Text style={[styles.SummaryText,{marginLeft:"67.5%"}]}>More details</Text>
        </TouchableOpacity>
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

export default WrongAlert;

const styles = StyleSheet.create({
    dotContainerA:{
        height : 9,
        width :9,
        backgroundColor:"#F6C142",
        borderRadius: 15/2,
    },
    dotContainerB:{
        height : 9,
        width :9,
        borderRadius: 15/2,
        backgroundColor:"#EE404C",
    },
    title:{
        color:"white",
        fontFamily: "K2D-Regular",
        fontSize:14,
        textAlign:"center",
        fontWeight:300,
        marginBottom:"5%"
      },
    verticalContainer:{
        flexDirection:"col",
        alignItems:"center",
        marginTop:"5%",
        marginBottom:"5%",
        marginHorizontal:"5%"
      },
    Summary:{
        backgroundColor:"#353948", 
        right:"25%",
        zIndex:100
      },
      SummaryText:{
        color:"white",
        fontFamily: "K2D-Regular",
        fontSize:12,
        fontWeight:300,
      },
      SummaryTextA:{
        color:"#F6C142",
        fontFamily: "K2D-Regular",
        fontSize:12,
        fontWeight:300,
      },
      SummaryTextB:{
        color:"#EE404C",
        fontFamily: "K2D-Regular",
        fontSize:12,
        fontWeight:300,
      },
      caseText:{
        color:"white",
        fontFamily: "K2D-Regular",
        //position:"absolute",
        fontSize:18,
        fontWeight:300,
        zIndex:1
      },
      rectangleContainer:{
        // flex:-10,
        width:"85%",
        borderColor:"white",
        borderRadius:8,
        height:"auto",
        borderWidth: 2,
        transform:[{translateY:-10}],
        flexWrap: 'wrap',
        flexDirection:"row",
        justifyContent:"space-evenly"
    
      },
    formHeader: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal:7,
        marginBottom:12,
        marginTop:2,
      },
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent:'flex-start'
  },
//   formHeader: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     // marginHorizontal:7,
//     // marginBottom:12,
//     // marginTop:2,
//     margintop:"-100%"
//   },
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
