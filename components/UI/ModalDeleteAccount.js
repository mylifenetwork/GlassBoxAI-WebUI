import React, { useState } from "react";
import { Text, View,StyleSheet,TouchableOpacity,Image,Dimensions} from "react-native";
import Button from "../../components/UI/Button";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import ModalDeleted from "./ModalDeleted";

function ModalDeleteAccount({case_number="121",name="braking"}) {
  const [isModalVisible, setModalVisible] = useState(false);
  //console.log("test modal",isModalVisible);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // console.log("test modal",isModalVisible);
  };

  const close=()=>{
    setModalVisible(false);
    console.log("test closing");
  }


  const w = Dimensions.get("window")["width"];

  // const sign = dic[name][0];

  return (
    <View>
        <TouchableOpacity style={{marginBottom:"30%"}} onPress={toggleModal}>
              <Text style={styles.hyperText}>
                Delete account 
              </Text>
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
            <Text style={styles.title}>Delete account</Text>
            <Image style={styles.imageContainer} source={require("../../assets/Images/block-user.png")}></Image>
            <Text numberOfLines={3} style={styles.detail}>Are you sure you want to delete your account? All information and data will be delete</Text> 
            <View style={styles.rowContainer}>
              <Button customStyle={[{width:"120%"}]} onPress={toggleModal} mode="flatReverse">
                Cancel
              </Button>
              <TouchableOpacity onPress={close}>
                <ModalDeleted close={toggleModal}></ModalDeleted>
              </TouchableOpacity>
              
            </View>
        </View>
      </Modal>


    </View>
  );
}

export default ModalDeleteAccount;
  
  const styles = StyleSheet.create({
    hyperText:{
        fontFamily: "K2D-Regular",
        color: "white",
        fontSize: 16,
        fontWeight:300,
        textDecorationLine: 'underline',
        marginTop:"5%",
        alignSelf:"center"
      },
    ButtonText:{
      fontSize:20,
      alignSelf:"center",
      marginLeft:"37.5%"
    },
    rowContainer:{
      flexDirection:"col",
      justifyContent:"space-between"
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
    },
    
  });