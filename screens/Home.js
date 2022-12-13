import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../styles/styles";
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


function Home({ navigation }) {
  const [isLogin,setIsLOgin]=useState(-1)
  const auth = getAuth();
 
  useEffect(() => {
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
          if(user)
    {
      console.log("have login");
      setIsLOgin(1);
    }
    else
    {
      console.log("not login");
      setIsLOgin(0)
    }
          return;
         
        }
       
        // ...
      } else {
        // User is signed out
        // ...
        console.log("sign out");
        setIsLOgin(0)
      }
    });
   
   
  });

  function showSignUpFormHandler() {
    navigation.navigate("SignUp");
  }

  function showLoginFormHandler() {
    if(isLogin==1)
    navigation.navigate("Overall");
    else if(isLogin==0)
    navigation.navigate("Login");
    //navigation.navigate("Overall");
   
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/Images/insuranceCompany.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button customStyle={styles.button} onPress={showSignUpFormHandler}>
          New User
        </Button>
        <Button
          customStyle={styles.button}
          onPress={showLoginFormHandler}
          mode="flat"
        >
          {isLogin!=-1?isLogin?"Returning User":"Login":"loading"}
          
        </Button>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.text}>Powered By</Text>
        </View>
        <View>
          <Image
            style={styles.footerImage}
            source={require("../assets/Images/GlassboxAIIcon.png")}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  footerContainer: {
    felx: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontFamily: "K2D-Regular",
  },

  footerImage: {
    width: 200,
    height: 100,
  },

  mainImage: {
    width: 100,
    height: 100,
  },

  button: {
    minWidth: 150,
  },
});
