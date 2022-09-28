import { View, StyleSheet, Alert,Image,Text } from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../../styles/styles";

function TotalTime({journey=10,hours=4.2,distance=105}) {
  return (
    <View style={styles.container}>
        <View style={styles.boxContainer}>
            <Text style={styles.titleContainer}>Total duration</Text>
        <Image
              source={require("../../assets/Images/time-left.png")}
        />
            <Text style={styles.titleContainer}>{hours} hours</Text>
        </View>

        <View style={styles.boxContainer}>
            <Text style={styles.titleContainer}>Total distance</Text>
        <Image
              source={require("../../assets/Images/motorway.png")}
        />
            <Text style={styles.titleContainer}>{distance} km</Text>
        </View>
        


    </View>
    
  );
}

export default TotalTime;

const styles = StyleSheet.create({
    container: {
        marginTop:"2.5%",
        marginLeft:"5%",
        marginRight:"5%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxContainer:{
        // felx: 1,
        //justifyContent: 'space-between',
        alignItems: "center",
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
    roleContainer: {
    color: "white",
    },
    buttonContainers: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    },
});
