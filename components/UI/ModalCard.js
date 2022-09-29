import React, { useState } from "react";
import { Button, Text, View,StyleSheet,TouchableOpacity,Image} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";

function ModalCard({name="speeding"}) {
  const [isModalVisible, setModalVisible] = useState(false);
  console.log("test modal",isModalVisible);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // console.log("test modal",isModalVisible);
  };

  const dic={
    speeding:
    ["Speeding", require("../../assets/Images/speedometer2.png"),
    "When you exceeds the road speed limits, we’ll show a speeding event."],

    braking:["Braking",require("../../assets/Images/brake2.png"),
    "When your speed is greatly reduced in a short amount of time, \
    we’ll show a sudden braking event."],

    acceleration:["Acceleration",require("../../assets/Images/performance2.png"),
    "This implies that the your speed should never exceed 80km/h.\
    Rapid increases in speed, sudden braking, and cornering at too \
    high a speed can all count as acceleration."],

    cornering:["Cornering",require("../../assets/Images/corner2.png"),
    "Any sliding and rollover, we'll count and show as cornering event."],

    distance:["Distance between cars",require("../../assets/Images/distance2.png"),
    "When you are too close to cars in front, we’ll show a too close alert."],

    obstructions:["Obstructions",require("../../assets/Images/obstruction2.png"),
    "When we detected any obstructions, we’ll show a obstructions alert. "],

    lane:["Staying within lanes",require("../../assets/Images/lane2.png"),
    "When you’re not staying within the lane, we’ll show an alert to remind you to \
    stay within the lanes. "]
    
    };
  const sign = dic[name][0];

  return (
    <View>
      {/* <Button onPress={toggleModal}> */}
      <TouchableOpacity  onPress={toggleModal} >
      <AntDesign color="white" name="infocirlceo" size={20} style={styles.infoIcon}/>
      </TouchableOpacity>
      
      {/* </Button> */}

      <Modal isVisible={isModalVisible}>
        <View style={styles.window}>
            <TouchableOpacity  onPress={toggleModal} >
                <AntDesign
                    style={styles.icon}
                    color="black"
                    name='close'
                    size={30}
                />
            </TouchableOpacity>
            <Text style={styles.title}>Notice</Text>
            <Image style={styles.imageContainer} source={dic[name][1]}></Image>
            <Text style={styles.signContainer}>{sign}</Text>
            <Text numberOfLines={5} style={styles.detail}>{dic[name][2]}</Text> 
        </View>
      </Modal>
    </View>
  );
}

export default ModalCard;
  
  const styles = StyleSheet.create({
    infoIcon:{
        marginLeft:"15%",
    },
    title:{
        color: "black",
        fontFamily: "K2D-Regular",
        fontWeight:"700",
        fontSize:22,
        marginBottom:"2.5%",
        textAlign:"center"
    },
    window:{
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 15,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:"80%",
        marginLeft:"10%"
    },
    icon:{
        marginTop:"2.5%",
        marginLeft:"80%"
    },
    imageContainer:{
        marginTop:"2.5%",
        transform:[{scale:1.5}]
    },
    signContainer:{
        fontFamily: "K2D-Regular",
        fontWeight:"500",
        fontSize:20,
        marginTop:"2.5%"
    },
    detail:{
        fontFamily: "K2D-Regular",
        fontWeight:"300",
        fontSize:14,
        marginTop:"2.5%",
        marginLeft:"20%",
        marginRight:"20%",
        marginBottom:"5%"

    }
    
  });