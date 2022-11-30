import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView,FlatList } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

// start pairing new device
function PaireNewDevice({
    caseNo = 121,
    summarydata=[{
        date: "July 15,2022",
        time:"08:51 AM",
        status: "Complete"
      }],
    device_info="loT-device-no.132",
    status="Connected",
}){
  const navigation = useNavigation();
  const searched_devices=["loT-device-no.141","LAPTOP-284BFEN"]
  

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
        
        {/* <ScrollView> */}
        <View style={styles.formHeader}>
            <View style={styles.iconContainer}>
            <Image source={require("../assets/Images/bluetooth1.png")} style={styles.imageContainer}></Image>
            </View>

            <Text  style={styles.titleText}>Pair your device</Text>
            <Text style={styles.subTitleText}>Hold your device closer to the phone</Text>

            <Text style={styles.hyperText}>Search result</Text>
            
            {/* <View  styles={styles.boxContainer}> */}
              <FlatList
                // style={{height:"40%"}}
                data={searched_devices}
                ItemSeparatorComponent={() => (
                  <View style={styles.lineSeperator} />
                )}
                renderItem={({item,index}) => <TouchableOpacity style={[styles.itemContainer,
                  index===0&&styles.upperBorder,
                  index===(searched_devices.length-1)&&styles.bottomBorder
                ]}>
                  <Text style={[styles.deviceText,{marginRight:"40%"}]}>{item}</Text>
                  </TouchableOpacity>
                  }
              />
            {/* </View> */}




  
            
        </View>
        {/* </ScrollView> */}

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

export default PaireNewDevice;

const styles = StyleSheet.create({
    hyperText:{
      fontFamily: "K2D-Regular",
      color: "white",
      fontSize: 14,
      fontWeight:300,
      marginRight:"50%"
    },
    lineSeperator:{
      backgroundColor: "white", 
      height: 1 
    },
    boxContainer:{
      flexDirection:"row",
      justifyContent:"space-around",
      width:"80%",
      padding:"2.5%",
      borderRadius:8,
      backgroundColor:"#5F616B"
    },
    itemContainer:{
      padding:"2.5%",
      backgroundColor:"#5F616B",
    },
    upperBorder:{
      borderTopLeftRadius:8,
      borderTopRightRadius:8,
      padding:"2.5%",
      backgroundColor:"#5F616B"
    },
    bottomBorder:{
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
      padding:"2.5%",
      backgroundColor:"#5F616B"
    },
    iconContainer:{
        marginTop:"15%",
        marginBottom:"15%"
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
    titleText:{
        color:"white",
        fontFamily: "K2D-Regular",
        fontWeight:700,
        fontSize:20,
        marginBottom:"2.5%"
    },
    form: {
        flex: 5,
        margin:7,
        transform:[{scale:0.9}]
    },
    deviceText: {
        fontFamily: "K2D-Regular",
        color: "white",
        fontSize: 14,
        fontWeight:300,
    },
    subTitleText: {
        fontFamily: "K2D-Regular",
        color: "white",
        fontSize: 16,
        fontWeight:300,
        marginBottom:"30%"
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
    signContainer:{
        felx: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    imageContainer:{
        marginTop:107/2-30,
        marginLeft:107/2-30,
        zIndex:100,
    },
    chart:{
        marginTop:"-25%",
        height:"50%",
        transform:[{scale:0.8}],
        marginBottom:"-25%"
    }
});