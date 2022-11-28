import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, View, Platform,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ImageViewer from '../components/UI/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import Profile from "../components/UI/Profile";
import UploadButton from '../components/UI/UploadButton';
import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require('../assets/Images/photo.png');
export default function EditProfile() {
  const [image, setImage] = useState(null);
  const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
  const navigation = useNavigation();

  function showOverallPageHandler() {
    navigation.navigate("Overall");
  }
  function showMiddleButtonHandler() {
    navigation.navigate("Journey");
  }
  function showPersonalPageHandler() {
    navigation.navigate("AccountPage");
  }

  useEffect(()=>{
    (async()=>{
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status);
    })();
  },[]);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  if(hasGalleryPermission === false){
    return <Text> No Access to Internal Storage</Text>
  }
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={image} />
      </View>
      <View style={styles.footerContainerA}>
        <Button title="Change Profile Photo" onPress={pickImage} color={"#A1DADC"}></Button>
      </View>
      <Profile style={styles.profileContainer}></Profile>
      <StatusBar style="auto" />
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeContainer}  onPress={showOverallPageHandler} >
          <Image source={require("../assets/home2.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showMiddleButtonHandler} >
          <Image source={require("../assets/journey1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeContainer} onPress={showPersonalPageHandler} >
          <Image source={require("../assets/user1.png")}/>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer:{

  },
  container: {
    flex: 1,
    backgroundColor:"#353948",
    alignItems: 'center',
  },
  imageContainer: {
  },
  footerContainerA: {
    flex: 1,
    alignItems: 'center',
  
  },
  homeContainer:{
    felx: 0.3,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  footerContainer: {
    felx: 1,
    flexDirection: "row",
    justifyContent: "center",
    align: "center",
    alignContent:"center",
    marginBottom:"7.5%",
},
buttonContainer:{
  flex: 0.8,
  flexDirection: 'row',
  align: "center",
  justifyContent: 'space-between'
},
});
