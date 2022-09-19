import { View, StyleSheet, Alert,Image,Text } from "react-native";
import { useState,React } from "react";
import { GlobalStyles } from "../../styles/styles";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

function TotalTime(
    {startDate="15 JUL, 2022",
    endDate="15 JUL, 2022",
    startTime="15:35",
    endTime="16:28",
    duration="00:53:10",
    distance="39"
    }) {
    const navigation = useNavigation();
    function showDetailsHandler() {
        navigation.navigate("SignUp");
    }

  return (
    <View style={styles.container}>
        <View style={styles.boxContainer}>
            <Text style={styles.titleContainer}>Last journey</Text>
            <View style={styles.rowContainer}>
            <View style={styles.colContainer}>
                <Text style={styles.text}>Start</Text>
                <Text style={styles.text}>End</Text>
                <Text style={styles.text}>Duration</Text>
                <Text style={styles.text}>Distance</Text>
            </View>
            <View style={styles.colContainer}>
                <Text style={styles.text}>{startDate} | {startTime}</Text>
                <Text style={styles.text}>{endDate} | {endTime}</Text> 
                <Text style={styles.text}>{duration}</Text>
                <Text style={styles.text}>{distance}</Text>
            </View>
            <View style={styles.colContainer}>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text> 
                <Text style={styles.text}></Text> 
                <Button customStyle={styles.button} onPress={showDetailsHandler}>
                    View Details
                </Button>
            </View>
        </View>
        </View>
        


    </View>
    
  );
}

export default TotalTime;

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        felx: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
    },
    boxContainer:{
        // felx: 1,
        //justifyContent: 'space-between',
        //alignItems: "center",
        backgroundColor:"#5F616B",
        borderRadius:"8"
    },
    titleContainer:{
        marginBottom:"5%",
        marginTop:"5%",
        marginLeft:"5%",
        marginRight:"5%",
        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 700,
        fontSize: 18,
    },
    text:{
        alignContent:"stretch",
        marginTop:"5%",
        marginLeft:"5%",
        marginRight:"5%",
        fontFamily: "K2D-Regular",
        color: "white",
        fontWeight: 300,
        fontSize: 14,

    },
    rowContainer: {
        felx: 1,
        flexDirection: "row",
        //alignContent:"stretch",
        color: "white",
    },
    colContainer: {
        felx: 1,
        flexDirection: "column",
        // alignContent:"stretch",
        color: "white",
    },
    buttonContainers: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    },
});