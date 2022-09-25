import { View, StyleSheet, Alert,Image,Text, Pressable} from "react-native";
import { useState,React } from "react";
import { GlobalStyles } from "../../styles/styles";
import Button from "./Button";
import Donut from "./Donut";
import { useNavigation } from "@react-navigation/native";

function ScoreCard(
    {startDate="15 JUL, 2022",
    endDate="15 JUL, 2022",
    startTime="08:33 AM",
    endTime="08:51 AM",
    duration="18",
    distance="8",
    location="Sha Tin",
    destination = "Cheung Sha Wan"
    }) {
    const navigation = useNavigation();
    const data = [{
        percentage: 74,
        color: '#F6C142',
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
        <View style={styles.chart}>
        {data.map((p, i) => {
        return <Donut key={i} percentage={p.percentage} 
        color={p.color} max={p.max} radius={p.radius}
        strokeWidth={p.strokewidth}/>
        })}
        </View>
        <View style={styles.middleContainer}>
            <View style={styles.rowContainer}>
                <Image source={require("../../assets/Images/locationStart.png")}/>
                <Text style={styles.text}>{location}
                {/* <Text style={styles.dateText}>{startDate} at {startTime}</Text> */}
                </Text>
                <Text style={styles.dateText}>{startDate} at {startTime}</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.line}></View>
                <Text style={styles.bottomText}>{distance}km, {duration}mins</Text>
            </View>
            

            <View style={styles.rowContainer}>
                <Image source={require("../../assets/Images/locationEnd.png")}/>
                <Text numberOfLines={2} style={styles.text}>{destination}</Text>
                <Text style={styles.dateText}>{endDate} at {endTime}</Text>
            </View>     
        </View>
        {/* <View style={[styles.middleContainer]}>
            <View style={[styles.rowContainer,{alignContent:"flex-start"}]}>
                <Text style={styles.dateText}>{startDate} at {startTime}</Text>
            </View>
            <View style={[styles.rowContainer,{marginTop:"30%"}]}>
                <Text style={styles.dateText}>{endDate} at {endTime}</Text>
            </View>
        </View> */}

            {/* <View style={styles.line}></View>
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
            </View> */}
    </View>
    
  );
}

export default ScoreCard;

const styles = StyleSheet.create({
    middleContainer:{
        flex:1,
        flexDirection:"col",
        alignItems:"flex-start",
        marginLeft:"5%"
    },
    rowContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    bottomText:{
        marginLeft:"8.5%",
        textAlign:"center",
        fontSize:12,
        color:"#979797"
    }, 
    line:{
        borderWidth: 1,
        borderColor:'#EBEBEB',
        height:37,
        marginTop:"2.5%",
        marginLeft:8,
        marginBottom:"2.5%"
    },
    container: {
        marginTop: 8,
    },
    bottomContainers:{
        felx:1,
        flexDirection:"row",
        alignContent:"space-between",
    },
    chart:{
        //alignItems:"center",
        //alignContent:"",
        marginTop:"12.5%",
        marginLeft:"2.5%",
        transform:[{scale:1.5}]
    },
    boxContainer:{
        flex: 1,
        flexDirection:"row",
    },
    text:{
        marginLeft:"5%",
        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 500,
        fontSize: 16,
        width:"25%",
    },
    dateText:{
        marginLeft:"5%",
        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 300,
        fontSize: 13,
        
    }
});