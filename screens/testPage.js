import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import { patchWebProps } from "@rneui/base";
import test from "../screens/test";

export default class testPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:props.mode,
      date:null,
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
    console.log(this.state.mode);
  };
  setEndDate= (dates) => {
    return (moment(dates).add(6, 'days'));
  };

  render() {
    const { date,startDate, endDate, displayedDate } = this.state;
    const now = new Date();
    console.log("test mode",this.state.mode);
    return (
      <View style={styles.container}>
        <DateRangePicker
        //open={false}
          onChange={this.setDates}
          date={date && this.state.mode ==="day"}
          endDate={this.setEndDate(startDate)}
          startDate={startDate}
          maxDate={now}
         //dayTextStyle={styles.text}
         dayHeaderTextStyle={styles.dayHeadertext}
          displayedDate={displayedDate}
          selectedTextStyle={styles.text}
          selectedStyle={styles.selected}
          dayTextStyle={styles.dayText}
          headerTextStyle={styles.Header}
          //range
        >
          <Image source={require("../assets/Images/calendar.png")}></Image>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color:"black",
    fontFamily: "K2D-Regular",
  },
  Header:{
    color:"black",
    fontSize:20,
    fontWeight:700,
    fontFamily: "K2D-Regular",
  },

  dayHeadertext:{
    fontFamily: "K2D-Regular",
    fontSize:14

  },
  dayText:{
    color:"black",
    fontFamily: "K2D-Regular",
    fontSize:14,
    fontWeight:500

  },
  selected:{
    backgroundColor:"#A1DADC",
    borderRadius:8
  }
});