import { View, StyleSheet, Alert,Image,Text, Pressable} from "react-native";
import { useState,React } from "react";
import { StatusBar } from "expo-status-bar";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from "../../styles/styles";


function ScoreCard(
    {
        scores = 80,
        alertname="Speeding",
        percentage = ((scores/100)*95),
        imageName="speedometer.png",
        noAlert = 2,
        height = 10,
    }) {
    // const createTwoButtonAlert = () =>
    // Alert.alert(
    //     "Notice",
    //     "<View><Image style={styles.footerImage} source={require('../assets/Images/GlassboxAIIcon.png')}/>",
    // );
    const data = [{
        percentage: 80,
        color: 'tomato',
        max: 100,
        radius:37.25/2,
        strokewidth:5,
        font:14,
      }];
      console.log(scores);

  return (
    <View style={styles.boxContainer}>
            <View style={styles.topContainers}>
                {/* <View style={styles.chart}> */}
                <View style={styles.signContainer}>
                    <Image source={require("../../assets/Images/speedometer.png")}/>
                    <Text style={styles.topText}>{alertname}</Text>
                    <AntDesign style={styles.icon} color="white" name="infocirlceo" size={20} />
                </View>
                {/* <View style={styles.topContainersB}>
                    <Image source={require("../../assets/Images/alertSmall.png")}/>
                    <Text style={styles.alertText}>{noAlert}</Text>
                </View> */} 
            </View>
                <View >
                    <View style={styles.bar}>
                    <View style={[styles.filler,{width:`${percentage}%`}]}>
                        <View style={[{marginLeft:"100%"},{paddingRight:5},{marginTop:"-7.5%"}]}>
                        <Text style={styles.labelStyles}>{scores}</Text>
                        </View>
                    </View>
                    </View>
                

                </View>

                
                        
            </View>
    
  );
}

export default ScoreCard;

const styles = StyleSheet.create({
    bar:{
    height: 8,
    width: '95%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft:"2.5%",
    marginTop:"5%",

    },
    filler:{
        height: 8,
        backgroundColor: "#A1DADC",
        borderRadius: 50,

    },
    labelStyles:{
        //padding:5,
        position:"absolute",
        color: '#A1DADC',
        fontWeight: 'bold',
      },
    icon:{
        marginLeft:"2.5%"
    },
    topContainers:{
        felx:1,
        flexDirection:"row",
        //justifyContent:"space-around",
        alignItems:"center",
        marginTop:"2.5%",
    },
    topContainersB:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"45%",
        fontSize:14,
        fontWeight:700,
    },
    bottomText:{
        textAlign:"center",
        fontSize:14,
        color:"#979797"
    },
    topText:{
        marginLeft:"5%",
        color:"white"
    },
    alertText:{
        color:"white"
    },
    
    Circle:{
        marginTop:10/2,
        height : 10 ,
        width :10,
        backgroundColor:'white',
        marginTop:10/2,
        borderRadius: 10/2,
    },
    signContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"2.5%",
        fontSize:14,
        fontWeight:700,
    },
    container: {
        marginTop: 8,
    },
    buttonContainers:{
        felx: 1,
        flexDirection: "col",
        //justifyContent: 'flex-end',
        alignContent:"space-between",
    },
    bottomContainers:{
        felx:1,
        flexDirection:"row",
        alignContent:"space-between",

    },
    chart:{
        marginTop:"2.5%",
        felx: 5,
        width: 37.25,
        height:37.25,
        alignItems:"left",
        marginBottom:"2.5%",
    },
    boxContainer:{
        felx: 1,
        width:317,
        height:136,
        flexDirection:"col",
        alignContent:"center",
        backgroundColor:"#5F616B",
        borderRadius:"8"
    },
    text:{
        // alignContent:"stretch",
        // marginTop:"5%",
        marginLeft:"2.5%",
        marginRight:"2.5%",

        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 300,
        fontSize: 14,

    },
});
