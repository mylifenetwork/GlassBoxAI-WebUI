import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DropdownBox({data}) {
  

  const [value, setValue] = useState(null);
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="down"
            size={20}
          />
        )
    }
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder={data[0]['label']}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderRightIcon={() => (
        <AntDesign style={styles.icon} color="black" name="down" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
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