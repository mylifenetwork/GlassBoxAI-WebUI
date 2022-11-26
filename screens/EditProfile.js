import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, View, Platform,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ImageViewer from '../components/UI/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import Profile from "../components/UI/Profile";
import UploadButton from '../components/UI/UploadButton';

const PlaceholderImage = require('../assets/Images/photo.png');
export default function EditProfile() {
  const [image, setImage] = useState(null);
  const [hasGalleryPermission,setHasGalleryPermission] = useState(null);

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
      <View style={styles.footerContainer}>
        <Button title="Change Profile Photo" onPress={pickImage} color={"#A1DADC"}></Button>
      </View>
      <Profile></Profile>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#353948",
    alignItems: 'center',
  },
  imageContainer: {
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
