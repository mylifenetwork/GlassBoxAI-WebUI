import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { useState, useRef, useEffect } from "react";



function OTPInputField({ setPinReady, code, setCode, maxLength }) {
 const textInputRef = useRef(null);

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false); 


  const codeDigitArray = new Array(maxLength).fill(0);

  function pressHandler () {
    setInputContainerIsFocused(true); 
    textInputRef.current.focus(); 

  }

  useEffect(() => {
    setPinReady(code.length === maxLength); 
    return () => setPinReady(false); 

  }, [code])

 

  function handleOnBlur() {
    setInputContainerIsFocused(false); 
  }

  

  return (
    <View style={styles.otpInputSection}>
      <Pressable onPress={pressHandler} style={styles.otpContainer}>
        {codeDigitArray.map((digit, index) => {
          const emptyInputChar = "";
          const d = code[index] || emptyInputChar;
          const isCurrentDigit = index === code.length; 
          const isLastDigit = index === maxLength - 1; 
          const isCodeFull = code.length === maxLength; 
          const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull); 

          const styledOTPInput = inputContainerIsFocused && isDigitFocused; 
          console.log(styledOTPInput);

          return (
            <View style={styledOTPInput === true ? styles.otpInputFocused : styles.otpInput} key={index}>
              <Text style={styles.otpInputText}>{d}</Text>
            </View>
          );
        })}
      </Pressable>

      <TextInput
      ref = {textInputRef}
        style={styles.hiddenTextInput}
        returnKeyType="done"
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
      />
    </View>
  );
}

export default OTPInputField;

const styles = StyleSheet.create({
  hiddenTextInput: {
    position:'absolute', 
    width:1,
    height:1,
    opacity:0,
  },
  otpInputSection: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  otpContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  otpInput: {
    borderColor: "white",
    minWidth: "10%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
  },
  otpInputText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  otpInputFocused: {
    minWidth: "10%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    borderColor: "#e3cb32",
    backgroundColor: "#877817",
  },
});
