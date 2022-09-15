import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";

function OverallPage({navigation}) {
  

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
    color: "white",
    fontFamily: "K2D-Regular",
  },
});
