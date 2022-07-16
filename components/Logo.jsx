import React from 'react'
import { Image,Alert,BackHandler,TouchableOpacity } from 'react-native'
import { View } from 'react-native';

const backPressed = () => {
    Alert.alert(
      "Exit PridX",
      "Do you want to Exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true;
  };
const Logo = () => {
  return (
<TouchableOpacity onPress={backPressed}>
<View style={{borderWidth:1,borderColor:'red',borderRadius:2,padding:5}}>
    <Image style={{width:42,height:30}} source={require('../Image/logo.png')}/>
</View>
</TouchableOpacity>
  )
}

export default Logo