import { View, StyleSheet, Alert } from "react-native";
import { useState ,useRef} from "react";
import Input from "./Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signOut ,RecaptchaVerifier,PhoneAuthProvider} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";
const app = getApp();
const auth = getAuth(app);
function LoginUserForm({ signUpOTPAuth}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleLicense, setvehicleLicense] = useState("");
  const [verificationId, setVerificationId]=useState("");
  const recaptchaVerifier = useRef(null);
  async function loginUserHandler() {
    const userData={
      phoneNumber:phoneNumber,
      forlogin:1,
      verificationId:verificationId,
    }
    try {
      console.log("send")
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      console.log("vid:"+verificationId)
      //setVerificationId(verificationId);
      userData.verificationId=verificationId;
      alert('Verification code has been sent to your phone.')
      signUpOTPAuth(userData)
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }; 

  
  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }
 
  function vehicleLicenseChangedHandler(enteredLicenseNum) {
    setvehicleLicense(enteredLicenseNum);
  }

  return (
    <KeyboardAwareScrollView>
      <View>
      <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        >

        </FirebaseRecaptchaVerifierModal>
       
        <Input
          iconConfig={{
            name: "call-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Phone Number",
            keyboardType: "phone-pad",
            onChangeText: phoneNumChangedHandler,
            value: phoneNumber,
          }}
        />
{/*         
        <Input
          iconConfig={{
            name: "car-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Vehicle License Plate Number",
            keyboardType: "email-address",
            onChangeText: vehicleLicenseChangedHandler,
            value: vehicleLicense,
          }}
        /> */}

       
      </View>
      <Button onPress={loginUserHandler}>Login</Button>
    </KeyboardAwareScrollView>
  );
}

export default LoginUserForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },

  roleContainer: {
    color: "white",
  },
  buttonContainers: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
