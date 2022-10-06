import * as React from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts'

export default function DonutPie({
      scores = 85,
      data = [50,10,20,10],
      date ="15/07/2022"

}) {
 
  // const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const randomColor=["#E33D39","#F08833","#F6C142","#469A4B"]
  const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: randomColor[index],
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))
    
  const ending = scores/100 * Math.PI * 2;

  return (
    <>
     <PieChart style={styles.chart} 
     data={pieData} 
     padAngle={0} 
     innerRadius = "40%"
     outerRadius="50%"
     endAngle= {ending}>
      <View style = {styles.textContainer}>
         <Text style={styles.text}>{scores}</Text>
         <Text style={styles.infoText}>Lastest update</Text>
         <Text style={styles.infoText}>{date}</Text>
      </View>
     </PieChart>
    </>
   
  );
}

const styles = StyleSheet.create({
  chart:{
    height:"100%",
  },
  textContainer:{
    zIndex:30,
    alignItems:"center",
    justifyContent:"center",

  },
  text: { 
    fontSize:45,
    color:'white',
    fontFamily: "K2D-Regular",
    fontWeight:700,
  },
  scores:{
    textAlign:'center',
    color:'white',
    fontFamily: "K2D-Regular",
    fontWeight:'700',
  },
  infoText:{
    fontSize:14,
    color:'white',
    fontFamily: "K2D-Regular",
    fontWeight:300,

  }
});