import React, { useState} from "react";
import { Text, View,StyleSheet,TouchableOpacity,Image,Dimensions} from "react-native";
import Button from "../../components/UI/Button";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

function ModalForget({
    devicedata={
        deviceName:"loT-device",
        number:"no.132",
         serialNo:"loT-device",
        version:"loT-device"
      },
}) {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    //console.log("test modal",isModalVisible);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModalForget = () => {
        //add function to delete the device from the database
        setModalVisible(!isModalVisible);
        navigation.navigate("PairedDeviceFailed");
    };


    const w = Dimensions.get("window")["width"];

  // const sign = dic[name][0];

  return (
    <View>
        <TouchableOpacity style={styles.forgetButtonContainer} onPress={toggleModal}>
            <View style={[styles.forgetButton,{width:w*0.8}]}>
                <Text style={styles.buttonText}>Forget this device</Text>
            </View>
        </TouchableOpacity>


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
            <Text style={styles.title}>Forget this device</Text>
            <Text numberOfLines={2} style={styles.detail}>
                Are you sure you wnat to forget the device your paired
            </Text> 
            <Image style={styles.imageContainer} source={require("../../assets/Images/delete1.png")}></Image>
            {/* <Text style={styles.signContainer}>Case no. {case_number}</Text> */}
            <View style={styles.rowContainer}>
              <Button customStyle={[{width:w*0.3}]} onPress={toggleModalForget}>
                Forget
              </Button>
              <Button mode="flatReverse" customStyle={[{width:w*0.3}]} onPress={toggleModal}>
                Cancel
              </Button>
            </View>
        </View>
      </Modal>


    </View>
  );
}

export default ModalForget;
  
  const styles = StyleSheet.create({
    forgetButtonContainer:{
        marginBottom:"110%"
    },
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
    ButtonText:{
      fontSize:20,
      alignSelf:"center",
       marginLeft:"25%"
    },
    rowContainer:{
      flexDirection:"col",
      justifyContent:"space-evenly"
    },
    infoIcon:{
        marginLeft:"15%",
    },
    title:{
        color: "black",
        fontFamily: "K2D-Regular",
        fontWeight:"700",
        fontSize:22,
        // marginBottom:"2.5%",
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
        marginLeft:"10%",
        height:"35%"
    },
    icon:{
        marginTop:"2.5%",
        marginLeft:"80%"
    },
    imageContainer:{
       // marginTop:"2.5%",

       // transform:[{scale:1.5}]
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