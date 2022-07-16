import React from 'react'
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native'

const Win = ({ navigation, route }) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.text1,styles.uptext]}>You have Guessed the correct number in</Text>
        <Text style={[styles.text1,styles.uptext,{fontSize:30,marginTop:2,color:'red'}]}>{route.params.count}</Text>
        <Text style={[styles.text1,styles.uptext,{marginTop:2}]}>Guesses</Text>
        <View style={styles.container}>
        <ImageBackground style={styles.Img1} source={require('../Image/Congrulation.gif')} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={[styles.text1,{marginTop: 1}]}>Your Predected Numbers are:</Text>
        <Text style={styles.text1}>
          [{route.params.numarray.map((a, index) => (
            <Text key={index}>{a} </Text>
          ))} ]
        </Text>
        <View style={styles.btn1}>
          <Button title='Play Again!' color={'#0be0ab'} onPress={() => { navigation.goBack() }} />
        </View>
      </View>
    </>
  )
}

export default Win

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    
  },
  btn1: {
    marginTop: 20,
    width: 140,
    backgroundColor: '#0be0ab',
    borderWidth: 8,
    borderColor: '#0be0ab',
    borderRadius: 25,
  },
  Img1: {
    width: 320,
    height: 150,
    marginTop:70
  },
  text1:{
    fontSize: 18,
    color: '#0be0ab',
    textAlign: "center" 
  },
  uptext:{
    marginTop:70
  }
});