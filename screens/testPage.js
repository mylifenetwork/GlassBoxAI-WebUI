import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";

export default class testPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };
  setEndDate= (dates) => {
    return (moment(dates).add(6, 'days'));
  };

  render() {
    const { startDate, endDate, displayedDate } = this.state;
    const now = new Date();
    //console.log("test end date",typeof(startDate),endDate);
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          endDate={this.setEndDate(startDate)}
          startDate={startDate}
          maxDate={now}
          displayedDate={displayedDate}
          selectedTextStyle={[{color:"black"}]}
          range
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});