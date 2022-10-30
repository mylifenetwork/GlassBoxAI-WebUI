import { addDays } from 'date-fns';
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image,Dimensions} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import Modal from "react-native-modal";
import Calendar from './Calendar';
import CalendarB from './CalendarB';

import Button from './Button';
import { height } from 'react-native-daterange-picker/src/modules';

export default function CalendarButton({type}) {
    console.log(type,"test button!");
    if(type==="monthYear"){
        return(
            <>
            <Calendar type={type}></Calendar>
            </>
        );
    }else{
        return(
            <>
            <CalendarB multiple={type}></CalendarB>
            </>
        );
    }
}
