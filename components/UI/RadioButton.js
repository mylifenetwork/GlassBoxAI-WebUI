import { StyleSheet, View, } from "react-native";
import { CheckBox } from "@rneui/themed";


function RadioButton({ checkOption, onPress, title}) {

  return (
    <View style={styles.container}>
      <CheckBox
        center
        title={title}
        textStyle={{color:'white', fontFamily:'K2D-Regular', fontSize:17}}
        checked={checkOption}
        checkedIcon = 'dot-circle-o'
        uncheckedIcon = 'circle-o'
        containerStyle = {{backgroundColor:'transparent', color:'white'}}
        onPress={onPress}
      />
    </View>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
  },


});
