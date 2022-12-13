import { View, Text, StyleSheet, Alert,TouchableOpacity } from "react-native";
import { useState,useRef } from "react";
import RadioButton from "../UI/RadioButton";
import Input from "./Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../UI/Button";

import SignUpFormValidation from "../../util/SignUpFormValidation";
import { getAuth, createUserWithEmailAndPassword,signOut ,RecaptchaVerifier,PhoneAuthProvider} from "firebase/auth";
import { firebaseConfig ,db} from "../../config";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import React from "react";
import { signInWithPhoneNumber } from "firebase/auth";
import { initializeApp, getApp } from 'firebase/app';
import { collection, addDoc,doc ,getDoc,getDocs, setDoc,query, where} from "firebase/firestore"; 
const app = getApp();
const auth = getAuth(app);
function SignUpUserForm({ signUpOTPAuth ,navigatetoOverall}) {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleLicense, setvehicleLicense] = useState("");
  const [password,setPassword] = useState("");

  const [privateUser, setPrivateUser] = useState(false);
  const [commercialOwner, setCommercialOwner] = useState(false);
  const [commercialDriver, setCommercialDriver] = useState(false);
  const [message, showMessage] = React.useState();

  const [verificationId, setVerificationId]=useState("");
  const [code,setCode]=useState("");
  const recaptchaVerifier = useRef(null);
  //const auth = getAuth();
  const user = auth.currentUser;
  if(user)
  {
    console.log("have login");
    alert("you have already login");
    console.log(user.uid)
    navigatetoOverall(user.uid)
  }
  else
  {
    console.log("not login");
  }
  async function signUpFormSubmissionHandler() {
    const userData = {
      name: userName,
      phoneNumber: phoneNumber,
      email: email,
      vehicleLicense: vehicleLicense,
      verificationId:verificationId,
      //confirmationResult:confirmationResult,
      role: checkUserRole(),
    };
    const formInputsAreValid = SignUpFormValidation(userData);

    if (!formInputsAreValid) {
      Alert.alert("Inavlid Inputs", "Please check your inputs");
      return;
    }
    const userRef = collection(db, "users");
    // Create a query against the collection.
    const q = query(userRef, where("liscense", "==", vehicleLicense));
    const querySnapshot = await getDocs(q);
    var isused=false;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      isused=true;
      
    });
    if(isused)
    {
      alert("license has been used");
      return;
    }
    //const auth = getAuth();
    // const appVerifier = recaptchaVerifier;
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((confirmationResult) => {
    //       // SMS sent. Prompt user to type the code from the message, then sign the
    //       // user in with confirmationResult.confirm(code).
    //       //window.confirmationResult = confirmationResult;
    //       var verificationId=confirmationResult.verificationId;
    //       console.log("vid:"+verificationId);
    //       setVerificationId(verificationId);
    //       // ...
    //     }).catch((error) => {
    //       // Error; SMS not sent
    //       // ...
    //     }).then(()=>{signUpOTPAuth(userData)})
    
    // firebase.auth().settings.appVerificationDisabledForTesting = true;
    // var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
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
      showMessage({
        text: 'Verification code has been sent to your phone.',
      })
      signUpOTPAuth(userData)
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: 'red' });
    }
    
  }
  const confirmCode=()=>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    console.log("id",verificationId);
    firebase.auth().signInWithCredential(credential)
    .then(()=>{
      setCode ("");
    })
    .catch((error)=>{
      //show an alert msg
      alert(error);
    })
    Alert.alert("login successful!")
  }

  function resetInputs() {
    setUserName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setvehicleLicense('');
    setPrivateUser(false);
    setCommercialDriver(false);
    setCommercialOwner(false);
  }

  function checkUserRole() {
    if (privateUser) {
      return "Private";
    } else {
      if (commercialDriver) {
        return "Commercial Driver";
      } else {
        return "Commercial Owner";
      }
    }
  }

  function privateOwnerbutton() {
    setPrivateUser(true);
    setCommercialDriver(false);
    setCommercialOwner(false);
  }
  function commercialOwnerButton() {
    setPrivateUser(false);
    setCommercialDriver(false);
    setCommercialOwner(true);
  }
  function commercialDriverButton() {
    setPrivateUser(false);
    setCommercialDriver(true);
    setCommercialOwner(false);
  }

  function userNameChangedHandler(enteredName) {
    setUserName(enteredName);
  }
  function phoneNumChangedHandler(enteredPhoneNum) {
    setPhoneNumber(enteredPhoneNum);
  }
  function emailChangedHandler(enteredEmail) {
    setEmail(enteredEmail);
  }
  async function vehicleLicenseChangedHandler(enteredLicenseNum) {
    
    setvehicleLicense(enteredLicenseNum);
  }
  // function passwordChangeHandler(enteredPassword){
  //   //setPassword(enteredPassword);
  //   setCode(enteredPassword);
  // }

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
            name: "person-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Name",
            keyboardType: "default",
            onChangeText: userNameChangedHandler,
            value: userName,
          }}
        />
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
        <Input
          iconConfig={{
            name: "mail-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Email Address",
            keyboardType: "email-address",
            onChangeText: emailChangedHandler,
            value: email,
          }}
        />
        <Input
          iconConfig={{
            name: "car-outline",
            size: 32,
            color: "white",
          }}
          textInputConfig={{
            placeholder: "Vehicle License Plate Number",
            //placeholder: "Code",
           // keyboardType: "email-address",
            onChangeText: vehicleLicenseChangedHandler,
            value: vehicleLicense,
          }}
        />
       

        <View style={styles.container}>
          <Text style={styles.roleContainer}>Select your role</Text>
          <View style={styles.buttonContainers}>
            <RadioButton
              checkOption={privateUser}
              onPress={privateOwnerbutton}
              title="Private"
            />
            <RadioButton
              checkOption={commercialDriver}
              onPress={commercialDriverButton}
              title="Commercial Driver"
            />
            <RadioButton
              checkOption={commercialOwner}
              onPress={commercialOwnerButton}
              title="Commercial Owner"
            />
          </View>
        </View>
      </View>
      <Button onPress={signUpFormSubmissionHandler}>Send Verification Code</Button>
      {/* <Button onPress={confirmCode}>Confirm Code</Button> */}
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: 'center' },
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </KeyboardAwareScrollView>
    
  );
}

export default SignUpUserForm;

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
