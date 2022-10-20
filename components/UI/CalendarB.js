import React, {useState, Fragment, useCallback, useMemo, useRef} from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity ,Dimensions} from "react-native";
import moment from "moment";
import {Calendar, CalendarUtils} from 'react-native-calendars';
import DateRangePicker from "react-native-daterange-picker";
import { patchWebProps } from "@rneui/base";
import Button from './Button';
import { format } from 'date-fns';
import Modal from "react-native-modal";
import { da } from 'date-fns/locale';

export default function CalendarB({multiple="week"}){
  console.log(multiple,"test index!!");
  const maxDate = new Date();
  const [selectedValue, setSelectedValue] = useState(new Date());
  const [dateString, setdateString] = useState("");
  const [selectedDate,setSelectedDate] = useState(new Date());
  const [selected, setSelected] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const getNewSelectedDate = useCallback(
    (date, shouldAdd) => {
      const newMonth = new Date(date).getMonth();
      const month = shouldAdd ? newMonth + 1 : newMonth - 1;
      const newDate = new Date(selectedValue.setMonth(month));
      //const cur = selectedDate.day;
      //console.log("test selected", typeof(selectedDate));
      const newSelected = new Date(newDate.setDate(1));
      return newSelected;
    },
    [selectedValue]
  );
  const onPressArrowLeft = useCallback(
    (subtract, month) => {
      const newDate = getNewSelectedDate(month, false);
      setSelectedValue(newDate);
      subtract();
    },
    [getNewSelectedDate]
  );

  const onPressArrowRight = useCallback(
    (add, month) => {
      const newDate = getNewSelectedDate(month, true);
      setSelectedValue(newDate);
      console.log(newDate,"fuck");
      setSelectedDate(newDate);
      add();
    },
    [getNewSelectedDate]
  );
 function getDate (date,count){
   const string = date.dateString;
   const ret =  (moment(string).add(count, 'days')).format('YYYY-MM-DD');
   //console.log(ret);
   return ret;
   //return CalendarUtils.getCalendarDateString(ret);
  };

  const CustomHeaderTitle = (
    <TouchableOpacity style={styles.customTitleContainer} onPress={() => console.warn('Tapped!')}>
      <Text style={styles.customTitle}>{format((selectedValue.getMonth() + 1),'MMMM')} {selectedValue.getFullYear()}</Text>
    </TouchableOpacity>
  );

  const [isModalVisible, setModalVisible] = useState(false);
//console.log("test modal",isModalVisible);

const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

  return (
    <View>
    <TouchableOpacity onPress={toggleModal}>
    <Image style={styles.image} source={require("../../assets/Images/calendar.png")}></Image>
    </TouchableOpacity>

    <Modal isVisible={isModalVisible}>
    {/* <Fragment> */}
    <View style={styles.fullScreen}>
      <Calendar
      theme={{
        arrowColor:"black",
        todayTextColor:"black",
        selectedDayBackgroundColor: '#A1DADC',
        dayTextColor: 'black',
        textDayFontFamily: 'K2D-Regular',
        selectedDayTextColor:"black",

      }}
        onDayPress={
          //onDayPress
          day => {
          setSelectedDate(day);

          //setSelectedValue(new Date(day));
          //onDayPress;
          console.log('selected day', typeof(new Date()));
       }
      }
         initialDate = {selectedDate}
         maxDate = {maxDate}
        markedDates={multiple==="week"&&{
          [getDate(selectedDate)]: {selected: true, selectedColor: '#A1DADC'},
          [getDate(selectedDate,-1)]: {selected: true, selectedColor: '#A1DADC'},
          [getDate(selectedDate,-2)]: {selected: true,  selectedColor: '#A1DADC'},
          [getDate(selectedDate,-3)]: {selected: true,  selectedColor: '#A1DADC'},
          [getDate(selectedDate,-4)]: {selected: true,  selectedColor: '#A1DADC'},
          [getDate(selectedDate,-5)]: {selected: true,  selectedColor: '#A1DADC'},
          [getDate(selectedDate,-6)]: {selected: true, selectedColor: '#A1DADC'},
          
        }}
        monthFormat={'MMMM yyyy'}
        style={styles.calendar}
        //customHeaderTitle={CustomHeaderTitle}
        onPressArrowLeft={onPressArrowLeft}
        onPressArrowRight={onPressArrowRight}
      />
          <View style={ styles.rowContainer}>          
          <Button customStyle={styles.button} onPress={toggleModal} mode={"flatReverse"}>
            Cancel
          </Button>
          <Button customStyle={styles.button} onPress={toggleModal} backgroundColor={"dark"} textColor={"white"}>
          Confirm
          </Button>
        </View>
        </View>
    {/* </Fragment>       */}
    </Modal>

      </View>
  );
};

const styles = StyleSheet.create({
  rowContainer:{
    zIndex:10,
    // transform:[{translateY:-10}],
    backgroundColor:"white",
    marginTop:"40%",
    alignSelf:"center",
    width:"40%",
    borderRadius:15,

  },
fullScreen:{
  flexDirection:"col",
  width:Dimensions.get("window")["width"],
  marginLeft:"-5%",
  backgroundColor:"white",
  borderRadius:15,
  height:Dimensions.get("window")["height"],
  top:"30%",
},
image:{
  transform:[{scale:0.9}],

},
calendar: {
  borderRadius:15,

},
switchContainer: {
  flexDirection: 'row',
  margin: 10,
  alignItems: 'center',
},
switchText: {
  margin: 10,
  fontSize: 16
},
text: {
  textAlign: 'center',
  padding: 10,
  backgroundColor: 'lightgrey',
  fontSize: 16
},
disabledText: {
  color: 'grey'
},
defaultText: {
  color: 'purple'
},
customCalendar: {
  height: 250,
  borderBottomWidth: 1,
  borderBottomColor: 'lightgrey'
},
customDay: {
  textAlign: 'center'
},
customHeader: {
  backgroundColor: '#FCC',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginHorizontal: -4,
  padding: 8
},
customTitleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10
},
customTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#00BBF2'
}
});