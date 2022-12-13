import { View, StyleSheet, Alert, Image, Text, Pressable } from "react-native";
import { useState, React } from "react";
import { GlobalStyles } from "../../styles/styles";
import Button from "./Button";
import Donut from "./Donut";
import { useNavigation } from "@react-navigation/native";
import { cos } from "react-native-reanimated";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { tr } from "date-fns/locale";

function ScoreCard(
    { startDate = "15 JUL, 2022",
        endDate = "15 JUL, 2022",
        startTime = "08:33",
        endTime = "08:51",
        duration = "18",
        distance = "8",
        location = "Sha Tin",
        noAlert = 2,
        color = "tomato",
        scores = 80,
        running = 0,
        alldata = null,
    }) {
    const [showdetail, setShowdetail] = useState(running?true:false);
    console.log("running:"+showdetail)
    const navigation = useNavigation();
    const data = [{
        percentage: scores,
        color: 'tomato',
        max: 100,
        radius: 37.25 / 2,
        strokewidth: 5,
        font: 14,
    }]
    var alertlist = [];
    calalerts();
    function calalerts() {
        var item = alldata;
        alertlist.push({ name: "acceleration", alert: item.alerts.acceleration.alert, score: item.alerts.acceleration.score })
        alertlist.push({ name: "barking", alert: item.alerts.barking.alert, score: item.alerts.barking.score })
        alertlist.push({ name: "cornering", alert: item.alerts.cornering.alert, score: item.alerts.cornering.score })
        alertlist.push({ name: "distanceWithinCars", alert: item.alerts.distanceWithinCars.alert, score: item.alerts.distanceWithinCars.score })
        alertlist.push({ name: "speeding", alert: item.alerts.speeding.alert, score: item.alerts.speeding.score })
        alertlist.push({ name: "withinLanes", alert: item.alerts.withinLanes.alert, score: item.alerts.withinLanes.score })

    }
    console.log(alertlist)
    console.log(running)
    function showDetailsHandler() {
        //navigation.navigate("SignUp");
        console.log("press:"+showdetail)
        if (showdetail == true)
            setShowdetail(false)
        else
            setShowdetail(true)
    }

    return (
        <View style={styles.boxContainer}>
            <Pressable onPress={showDetailsHandler} style={styles.buttonContainers}>
                <View style={styles.topContainers}>
                    <View style={styles.chart}>
                        {data.map((p, i) => {
                            return <Donut key={i} percentage={p.percentage}
                                color={color} max={p.max} radius={p.radius}
                                strokeWidth={p.strokewidth} />
                        })}
                    </View>

                    {/* <Text style={styles.topText}>In {location}</Text> */}

                    {running ? <Text style={[styles.topText]}>Running</Text> : <Text style={styles.topText}>Finished</Text>}


                    <View style={styles.topContainersB}>
                        <Image source={require("../../assets/Images/alertSmall.png")} />
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

                        <View styles={styles.bottomContainers}>
                            <Text style={styles.bottomText}>{duration} mins , {distance} km</Text>
                        </View>


                    </View>

                    <Text style={styles.text}>{endTime}</Text>
                </View>
                {
                    showdetail ? <View>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff'}} >
                           
                            {alertlist.map(item => (
                           <Row data={[item.name,"alert:"+item.alert,"score:"+item.score]} textStyle={{color: "white"}}></Row>
                            )
                            )}
                        </Table>


                    </View> : null
                }

            </Pressable>
        </View>

    );
}

export default ScoreCard;

const styles = StyleSheet.create({
    topContainers: {
        felx: 1,
        flexDirection: "row",
        //justifyContent:"space-around",
        alignItems: "center"
    },
    topContainersB: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "47.5%",
        fontSize: 14,
        /*fontWeight: 700,*/
    },
    bottomText: {
        textAlign: "center",
        fontSize: 14,
        color: "#979797"
    },
    topText: {
        marginLeft: "5%",
        color: "white"
    },
    alertText: {
        color: "white"
    },

    Circle: {
        marginTop: 10 / 2,
        height: 10,
        width: 10,
        backgroundColor: 'white',
        marginTop: 10 / 2,
        borderRadius: 10 / 2,
    },
    DonutCircle: {
        marginTop: 10 / 2,
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        borderWidth: 2,
        borderColor: "white"
    },
    line: {
        borderWidth: 1,
        borderColor: '#EBEBEB',
        width: 305,
        marginTop: "2.5%",
        marginBottom: "2.5%"

    },
    lineB: {
        felx: 10,
        height: 1,
        backgroundColor: '#EBEBEB',
        width: 168.03,
        alignContent: "flex-end",
        marginTop: 10

    },
    container: {
        marginTop: 8,
    },
    buttonContainers: {
        felx: 1,
        flexDirection: "column",
        //justifyContent: 'flex-end',
        alignContent: "space-between",
    },
    bottomContainers: {
        felx: 1,
        flexDirection: "row",
        alignContent: "space-between",

    },
    chart: {
        marginTop: "2.5%",
        felx: 5,
        width: 37.25,
        height: 37.25,
        /*alignItems: "left",*/
        marginBottom: "2.5%",

    },
    boxContainer: {
        felx: 1,
        width: 317,
        height: "auto",

        alignItems: "center",
        backgroundColor: "#5F616B",
        borderRadius: 8,
        marginBottom: "2.5%"

    },
    text: {
        // alignContent:"stretch",
        // marginTop:"5%",
        marginLeft: "2.5%",
        marginRight: "2.5%",

        fontFamily: "K2D-Regular",
        color: "white",
        /*fontWeight: 300,*/
        fontSize: 14,

    },
});