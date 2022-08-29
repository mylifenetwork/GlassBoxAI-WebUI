import { StatusBar, StyleSheet, Text, View, TextInput, Pressable, Keyboard } from "react-native";
import { GlobalStyles } from "../styles/styles";
import {useState, useRef, useEffect} from 'react'
import OTPInputField from "../components/OTPInput.js/OTPInputField";

function SignUpOTPAuthScreen({ navigation }) {
const [code, setCode] = useState("");
const [pinReady, setPinReady] = useState(false);
const MAX_CODE_LENGTH = 4;

 
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.welcomeText}>One more step</Text>
          <Text style={styles.descriptionText}>
            Enter the OTP code we have sent to your entered phone number
          </Text>
        </View>

        <Pressable style={styles.otpInputForm} onPress={Keyboard.dismiss}>
          
            <OTPInputField
              setPinReady={setPinReady}
              code={code}
              setCode={setCode}
              maxLength={MAX_CODE_LENGTH}
            />
          
        </Pressable>
      </View>
    </>
  );
}

export default SignUpOTPAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353948",
    justifyContent: 'flex-end',
    alignItems:'center', 
    
  },
  formHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 7,
    marginBottom: 12,
    marginTop: 2,
  },
  otpInputForm: {
    flex:3,
    margin: 2,
    justifyContent:'flex-start', 
    alignItems:'center',
    
  },
  accountText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 17,
  },
  welcomeText: {
    fontFamily: "K2D-Regular",
    color: GlobalStyles.colors.primary50,
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  formInfo: {
    fontFamily: "K2D-Regular",
    color: "white",
    fontSize: 13,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 7,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "white",
  },
  cellText: {
    color: "white",
    fontFamily: "K2D-Regular",
    fontSize: 28,
    textAlign: "center",
  },
});
