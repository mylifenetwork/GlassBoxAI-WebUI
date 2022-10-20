import { addDays } from 'date-fns';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image,Dimensions} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import Modal from "react-native-modal";

import Button from './Button';

export default function Calendar({type = "monthYear", change=true}) {
  const w = Dimensions.get("window")["width"];
  const [isModalVisible, setModalVisible] = useState(false);
  //console.log("test modal",isModalVisible);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    const minDate = new Date();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [pressed,setPressed] = useState(0);
  
    return (
      <View>
        <TouchableOpacity onPress={toggleModal}>
        <Image style={styles.image} source={require("../../assets/Images/calendar.png")}></Image>
        </TouchableOpacity>
      
      <Modal isVisible={isModalVisible}>
        <View style={[styles.Container,type==="date"&&styles.fullScreen]}>
          <DatePicker
            //disableDateChange={change}
            style={[type==="date"&&styles.date,styles.monthYear]}
            options={{
              mainColor:"#A1DADC",
              selectedTextColor:"black",
              defaultFont:"K2D-Regular",
              textHeaderFontSize:20,
              borderColor:"transparent",
              //backgroundColor:"purple"

            }}
            mode={type}
            onSelectedChange={date => setSelectedDate(date)}
          >
          </DatePicker>
          <View style={ [type==="monthYear"&&styles.colContainer,type==="date"&&styles.rowContainer]}>          
            <Button customStyle={styles.button} onPress={toggleModal} mode={"flatReverse"}>
              Cancel
            </Button>
            <Button customStyle={styles.button} onPress={toggleModal} backgroundColor={"dark"} textColor={"white"}>
            Confirm
            </Button>
          </View>
        </View>

      
      
      </Modal>
      </View>
    );
  }

  const styles = StyleSheet.create({
    image:{
      transform:[{scale:0.9}],
    },
    fullScreen:{
      flexDirection:"col",
      width:Dimensions.get("window")["width"],
      marginLeft:"-5%"

    },
    Container:{
      flexDirection:"col",
      //height:0

    },
    colContainer:{
      flexDirection:"row",
      zIndex:100,
      justifyContent:"space-evenly",
      transform:[{translateY:-55}],
    },
    rowContainer:{
      flexDirection:"col",
      zIndex:100,
      alignItems:"center",
      // justifyContent:"center",
      transform:[{translateY:-95}],
    },
    monthYear:{
      borderRadius:15,
    },
    date:{
      borderRadius:15,
      height:"97.5%",
      bottom:"-30%"
    },
    canlendar:{
      marginBottom:"20%",
    },
    button:{
      // zIndex:100,
      // width:"30%",
      // marginBottom:"5%"
      width:"30%"

    },
    container:{
      borderRadius:100,
      flex:1,
      bottom:"-50%"
    },
    dropdown: {
      margin: "5%",
      height: 50,
      backgroundColor: '#FADA8E',
      borderRadius: 12,
      padding: 12,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      width:"50%",
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      alignItems:"center",
  
      elevation: 2,
    },
    icon: {
      //marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:"#FADA8E",
    },
    textItem: {
      flex: 1,
      fontSize: 16,
      textAlign:'center',
    },
    placeholderStyle: {
      fontSize: 16,
      textAlign:'center',
    },
    selectedTextStyle: {
      fontSize: 16,
      textAlign:'center'
    },
    iconStyle: {
    },
    buttonContainer: {
      flex: 1,
      alignItems:"center",
      flexDirection:'col',
      // justifyContent: "flex-end"
    },
  });