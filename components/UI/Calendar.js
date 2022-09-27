import { addDays } from 'date-fns';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DatePicker } from 'react-native-week-month-date-picker';

export default function Calendar() {
    const minDate = new Date();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
  
    return (
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
          theme={{
            primaryColor: 'black',
          }}
        >
          {/* <View> */}
            {/* <Text>{selectedDate.toString()}</Text> */}
          {/* </View> */}
        </DatePicker>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      borderRadius:12,
      flex:1,

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
  });