import { View, StyleSheet, Alert,Image,Text, Pressable} from "react-native";
import { useState,React } from "react";
import { GlobalStyles } from "../../styles/styles";
import Button from "./Button";
import Donut from "./Donut";
import { useNavigation } from "@react-navigation/native";

function ScoreCard(
    {startDate="15 JUL, 2022",
    endDate="15 JUL, 2022",
    startTime="08:33",
    endTime="08:51",
    duration="18",
    distance="8",
    location="Sha Tin",
    noAlert=2,
    }) {
    const navigation = useNavigation();
    const data = [{
        percentage: 80,
        color: 'tomato',
        max: 100,
        radius:37.25/2,
        strokewidth:5,
        font:14,
      }]
    function showDetailsHandler() {
        navigation.navigate("SignUp");
    }

  return (
    <View style={styles.boxContainer}>
        <Pressable onPress={showDetailsHandler} style={styles.buttonContainers}>
            <View style={styles.topContainers}>
                <View style={styles.chart}>
                {data.map((p, i) => {
                return <Donut key={i} percentage={p.percentage} 
                color={p.color} max={p.max} radius={p.radius}
                strokeWidth={p.strokewidth}/>
                })}
                </View>

                <Text style={styles.topText}>In {location}</Text>
                <View style={styles.topContainersB}>
                    <Image source={require("../../assets/Images/alertSmall.png")}/>
                    <Text style={styles.alertText}>{noAlert}</Text>
                </View>
                
            </View>

            <View style={styles.line}></View>
            <View style={styles.bottomContainers}>
                <Text style={styles.text}>{startTime}</Text> 
                <View style={styles.timeContainers}>
                    <View style={styles.bottomContainers}>
                    <View style={styles.Circle}></View>
                    <View style={styles.lineB}></View>
                    <View style={styles.DonutCircle}></View>
                    </View>

                    <View  styles={styles.bottomContainers}>
                        <Text style={styles.bottomText}>{duration} mins , {distance} km</Text>
                    </View>


                </View>

                <Text style={styles.text}>{endTime}</Text>
            </View>

        </Pressable>  
    </View>
    
  );
}

export default ScoreCard;

const styles = StyleSheet.create({
    topContainers:{
        felx:1,
        flexDirection:"row",
        //justifyContent:"space-around",
        alignItems:"center"
    },
    topContainersB:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"47.5%",
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
    DonutCircle:{
        marginTop:10/2,
        height : 10 ,
        width :10,
        borderRadius: 10/2,
        borderWidth:2,
        borderColor:"white"
    },
    line:{
        borderWidth: 1,
        borderColor:'#EBEBEB',
        width: 305,
        marginTop:"2.5%",
        marginBottom:"2.5%"

    },
    lineB:{
        felx: 10,
        height:1,
        backgroundColor:'#EBEBEB',
        width: 168.03,
        alignContent:"flex-end",
        marginTop:10

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

        alignItems: "center",
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