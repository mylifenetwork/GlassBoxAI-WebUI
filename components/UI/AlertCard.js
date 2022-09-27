import { View, StyleSheet, Alert,Image,Text, Pressable, ImageBackground} from "react-native";
import { useState,React } from "react";
import { StatusBar } from "expo-status-bar";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from "../../styles/styles";


function ScoreCard(
    {
        scores = 5,
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
                <View style={styles.topContainersB}>
                    <Image source={require("../../assets/Images/alertSmall.png")}/>
                    <Text style={styles.alertText}>{noAlert}</Text>
                </View> 
            </View>
            <View >
                <View style={styles.bar}>
                <Text style={[styles.labelStyles,{left:`${percentage}%`}]}>{scores}</Text>
                <View style={[styles.filler,{width:`${percentage}%`}]}>
                    <View style={styles.bottomContainers}>
                    <View style={[{marginLeft:"100%"},{paddingRight:5},{marginTop:"-7.5%"}]}>
                    </View>
                    <View style={styles.Circle}></View>
                    </View>
                </View>
                </View>
            </View>
            <View style={styles.bottomContainers}>
                <Text style={[styles.bottomText,{marginRight:"2.5%"}]}>Take it easy</Text>
                <Text style={[styles.bottomText,{marginLeft:"65%"}]}>Excellent</Text>
            </View>
            <View style={styles.bottomContainers}>
                <ImageBackground style={{width: 20, height: 30}} source={require("../../assets/Images/Group.png")}>
                    <Image style={{width: 10, height: 15,marginLeft:"25%"}}source={require("../../assets/Images/speedometer1.png")}>

                    </Image>
                </ImageBackground>
                <Text style={[styles.bottomText,{marginLeft:"65%"}]}>Excellent</Text>
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
    marginTop:"7.5%",
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
        bottom:"150%",
        // marginRight:"25%",
        fontSize:16,
        fontFamily: "K2D-Regular",
      },
    icon:{
        marginLeft:"10%"
    },
    topContainers:{
        felx:1,
        flexDirection:"row",
        alignItems:"center",
        marginTop:"2.5%",
    },
    topContainersB:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"32.5%",
        fontSize:14,
        fontFamily: "K2D-Regular",
        fontWeight:700,
    },
    bottomText:{
        textAlign:"center",
        fontSize:10,
        color:"#979797",
        marginTop:"2.5%"
    },
    topText:{
        marginLeft:"5%",
        color:"white",
        fontFamily: "K2D-Regular",
    },
    alertText:{
        color:"white",
        fontFamily: "K2D-Regular",
    },
    Circle:{
        marginTop:-4.5,
        height : 15 ,
        width :15,
        backgroundColor:'white',
        borderRadius: 15/2,
        marginLeft:-7.5,
    },
    signContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"2.5%",
        fontSize:14,
        fontFamily: "K2D-Regular",
        fontWeight:700,
    },
    container: {
        marginTop: 8,
    },
    buttonContainers:{
        felx: 1,
        flexDirection: "col",
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
        width:345,
        height:156,
        flexDirection:"col",
        alignContent:"center",
        backgroundColor:"#5F616B",
        borderRadius:"8"
    },
    text:{
        marginLeft:"2.5%",
        marginRight:"2.5%",
        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 300,
        fontSize: 14,

    },
});
