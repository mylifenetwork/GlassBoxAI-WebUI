import { addDays } from 'date-fns';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { DatePicker } from 'react-native-week-month-date-picker';
import Modal from "react-native-modal";
import Button from './Button';

export default function Calendar() {
  const [isModalVisible, setModalVisible] = useState(false);
  //console.log("test modal",isModalVisible);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // console.log("test modal",isModalVisible);
  };
    const minDate = new Date();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
  
    return (
      <View>
        <TouchableOpacity onPress={toggleModal}>
        <Image source={require("../../assets/Images/calendar.png")}></Image>

      </TouchableOpacity>
      
      <Modal isVisible={isModalVisible}>
      <SafeAreaView style={styles.container}>
        <DatePicker
          minDate={minDate}
          maxDate={addDays(minDate, 120)}
          markedDates={[minDate, addDays(new Date(), 2)]}
          selectedDate={selectedDate}
          onDateChange={(date) => setSelectedDate(date)}
          disabledDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
          allowsPastDates={false}
          locale="en"
          style={styles.calendar}
          theme={{
            primaryColor: 'black',
          }}
        >
          {/* <View style={styles.buttonContainer}>
        <Button style={styles.button} bgcolor={"#353948"} onPress={toggleModal} textColor={"white"}>
          Confirm
        </Button>
        <Button style={styles.button} bgcolor={"white"} onPress={toggleModal}>
          Cancel
        </Button>
      </View> */}
          
        </DatePicker>
<View style={styles.buttonContainer}>
        <Button style={styles.button} bgcolor={"#353948"} onPress={toggleModal} textColor={"white"}>
          Confirm
        </Button>
        <Button style={styles.button} bgcolor={"white"} onPress={toggleModal}>
          Cancel
        </Button>
      </View>
      </SafeAreaView>
      
      </Modal>
      </View>
    );
  }

  const styles = StyleSheet.create({
    canlendar:{
      marginBottom:"20%"
    },
    button:{
      marginBottom:"5%"

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