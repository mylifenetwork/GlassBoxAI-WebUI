import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView,FlatList,Dimensions } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

function DeviceInfo({
    devicedata={
        deviceName:"loT-device",
        number:"no.132",
         serialNo:"loT-device",
        version:"loT-device"
      },
}){
    const w = Dimensions.get("window")["width"];
    const h = Dimensions.get("window")["height"];
  const datas = ["Device name",devicedata["deviceName"],"Device number",devicedata["number"],
                "Serial number",devicedata["serialNo"], "Version",devicedata["version"]
                ]
  const navigation = useNavigation();
  

  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    //navigation.navigate("Overall");
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
            <Text style={styles.hyperText}>About</Text>
            
            {/* <View  styles={styles.boxContainer}> */}
              <FlatList
                style={{zIndex:-100}}
                data={datas}
                numColumns={2}
                ItemSeparatorComponent={() => (
                  <View style={[styles.lineSeperator,{width:w*0.775}]} />
                )}
                renderItem={({item,index}) => <View style={[styles.itemContainer,
                  index===0&&styles.upperLeftBorder,
                  index===1&&styles.upperRightBorder,
                  index===(datas.length-2)&&styles.bottomLeftBorder,
                  index===(datas.length-1)&&styles.bottomRightBorder
                ]}>
                 <Text style={[styles.deviceText,
                    {width:w*0.35}]}>{item}</Text>
                  </View>
                  }

              />
              <TouchableOpacity>
                <View style={[styles.forgetButton,{width:w*0.75}]}>
                    <Text style={styles.buttonText}>Forget this device</Text>
                </View>
              </TouchableOpacity>




  
            
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

export default DeviceInfo;

const styles = StyleSheet.create({
    forgetButton:{
        backgroundColor:"#5F616B",
        borderRadius:8,
        padding:"2.5%"

    },
    buttonText:{
        color:"#A1DADC",
        fontFamily: "K2D-Regular",
        fontWeight:400,
        fontSize:16,
        marginRight:"20%"
    },
    hyperText:{
      fontFamily: "K2D-Regular",
      color: "white",
      fontSize: 14,
      fontWeight:300,
      marginRight:"70%"
    },
    lineSeperator:{
      backgroundColor: "white", 
      height: 1 
    },
    boxContainer:{
      flexDirection:"column",
    //   justifyContent:"space-around",
    //   width:"80%",
    //   padding:"2.5%",
    //   borderRadius:8,
    //   backgroundColor:"#5F616B"
    },
    itemContainer:{
      padding:"2.5%",
      backgroundColor:"#5F616B",
    },
    upperLeftBorder:{
      borderTopLeftRadius:8,
      padding:"2.5%",
      backgroundColor:"#5F616B"
    },
    upperRightBorder:{
        borderTopRightRadius:8,
        padding:"2.5%",
        backgroundColor:"#5F616B"
      },
    bottomLeftBorder:{
      borderBottomLeftRadius:8,
      padding:"2.5%",
      backgroundColor:"#5F616B"
    },
    bottomRightBorder:{
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
        //marginRight:"26%"
    },
    deviceTextb: {
        fontFamily: "K2D-Regular",
        color: "#C1C1C1",
        fontSize: 12,
        fontWeight:300,
        //marginRight:"26%"
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