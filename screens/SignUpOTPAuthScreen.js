import { StatusBar, StyleSheet, Text, View, TextInput, Pressable, Keyboard,Alert } from "react-native";
import { GlobalStyles } from "../styles/styles";
import {useState, useRef, useEffect} from 'react'
import OTPInputField from "../components/OTPInput.js/OTPInputField";
import Button from "../components/UI/Button";
import { storeUser } from "../http/http";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { firebaseConfig,db } from "../config";
// import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import firebase from "firebase/compat/app";
import { collection, addDoc,doc ,getDoc, setDoc} from "firebase/firestore"; 
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

function SignUpOTPAuthScreen({route, navigation }) {
console.log(route.params.verificationId);
const [code, setCode] = useState("");
const [pinReady, setPinReady] = useState(false);
const [uid, setUid] = useState("");
const [forlogin, setforlogin] = useState(0);
const MAX_CODE_LENGTH = 6;
useEffect(() => {
  if(route.params.login!=null&&route.params.login==1)
  {
    setforlogin(1)
    console.log("for login")
  }
});

// this function will authenticate OTP that is generated from the backend 
function authenticateOTP() {
  console.log('Code authenticated');

}; 


// function for addijng a new user to the database. 
function addNewUserHandler() {
  // if authentication is successful then add the user to the database 
  authenticateOTP(); 
  storeUser(route.params);
  

}


const sendData=async (uid)=>{
  // await addDoc(collection(db,"users"),{
  //     nname:route.params.name,
  //     email:route.params.email,
  //     role:route.params.role,
  //     phoneNumber:route.params.phoneNumber,
  //     liscense: route.params.vehicleLicense,
  // });
const docRef = doc(db,"users",uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  var docData={
    nname:route.params.name,
    email:route.params.email,
    role:route.params.role,
    phoneNumber:route.params.phoneNumber,
    liscense: route.params.vehicleLicense,
  }
  await setDoc(doc(db,"users",uid), docData);
}

}
  

const confirmCode=async ()=>{
  const credential = firebase.auth.PhoneAuthProvider.credential(
    route.params.verificationId,
    code
  );
  console.log(route.params);
  await firebase.auth().signInWithCredential(credential)
  .then(async ()=>{
    console.log("login")
  })
  .catch((error)=>{
    //show an alert msg
    alert(error);
  })
  const auth = getAuth();
  var goon=0;
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    if (uid!=""&&goon==0) {
      goon=1
      // User is signed in.
      setUid(uid)
    
      console.log("sign in uid:"+uid)
      setCode ("");
      sendData(uid);
      Alert.alert("login successful!");
      navigation.navigate("Overall");
      return;
     
    }
   
    // ...
  } else {
    // User is signed out
    // ...
    console.log("sign out");
  }
});
}
const confirmCodelogin=async ()=>{
  const credential = firebase.auth.PhoneAuthProvider.credential(
    route.params.verificationId,
    code
  );
  console.log(route.params);
  await firebase.auth().signInWithCredential(credential)
  .then(async ()=>{
    console.log("login")
  })
  .catch((error)=>{
    //show an alert msg
    alert(error);
  })
  const auth = getAuth();
  var goon=0;
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    if (uid!=""&&goon==0) {
      goon=1
      // User is signed in.
      setUid(user.uid)
      Alert.alert("login successful!");
      navigation.navigate("Overall");
      return;
     
    }
   
    // ...
  } else {
    // User is signed out
    // ...
    console.log("sign out");
  }
});
}

  



 
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

        <Button onPress={forlogin?confirmCodelogin:confirmCode} customStyle={styles.buttonStyle}>Done</Button>
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

  buttonStyle: {
    width:100, 
    height:40,
  }
});
