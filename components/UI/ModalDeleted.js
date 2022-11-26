import React, { useState } from "react";
import { Text, View,StyleSheet,TouchableOpacity,Image,Dimensions} from "react-native";
import Button from "../../components/UI/Button";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Modal from "react-native-modal";
import CountDownComponent from "./CountDownComponent";
import { height } from "react-native-daterange-picker/src/modules";

function ModalDeleted({close}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true)
  const navigation = useNavigation();
  //console.log("test modal",isModalVisible);

  const toggleModal = () => {
    if (isModalVisible){
       close();
    }
    setModalVisible(!isModalVisible);
  };

  function handleComplete(){
    close();
    navigation.navigate("Login");
    
  }


  const w = Dimensions.get("window")["width"];

  // const sign = dic[name][0];

  return (
    <View>
      <Button onPress={toggleModal} customStyle={[{width:"120%"}]}>
        Delete
      </Button>

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
            <Text style={styles.title}>Delete account</Text>
            <Image style={styles.imageContainer} source={require("../../assets/Images/tick1.png")}></Image>
            <Text style={styles.detail}>
                Your account was deleted
            </Text> 
            <View style={styles.rowContainer}>
                <Text style={[styles.hyperText,{transform:[{translateX:106}]}]}>
                    Returning to login page in 
                </Text>
                <View style={styles.container}>
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={3}
                        trailColor={"transparent"}
                        colors={["black"]}
                        onComplete={handleComplete}
                        trailStrokeWidth={0}
                        // strokeLinecap={"butt"}
                        strokeWidth={0}
                    >
                    {({ remainingTime, color }) => (
                        <Text style={{ color, fontSize: 16,fontWeight:300,
                            fontFamily: "K2D-Regular"}}>
                        {remainingTime}
                        </Text>
                    )}
                    </CountdownCircleTimer>
                </View>
                <Text style={[styles.hyperText,{transform:[{translateX:-74}]}]}>seconds</Text>
              
            </View>
        </View>
      </Modal>


    </View>
  );
}

export default ModalDeleted;
  
  const styles = StyleSheet.create({
    container: {
        marginLeft:"10%",
        marginRight:"-2.5%",
        transform:[{translateY:-79}]
    },
    hyperText:{
        fontFamily: "K2D-Regular",
        color: "black",
        fontSize: 16,
        fontWeight:300,
        // textDecorationLine: 'underline',
    },
    ButtonText:{
      fontSize:20,
      alignSelf:"center",
       marginLeft:"25%"
    },
    rowContainer:{
      flexDirection:"row",
      justifyContent:"center",
      marginLeft:"10%",
      marginBottom:"5%"
    },
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
        width:"90%",
        marginLeft:"10%",
        height:"35%"
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
    },
    
  });