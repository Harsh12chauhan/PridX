import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Image,ImageBackground } from 'react-native'

const harsh = Math.floor((Math.random() * 100) + 1);

const Letsplay = ({ navigation }) => {

    const yash = Math.floor((Math.random() * 100) + 1);
    const [ranum, setranum] = useState(harsh)
    const [number, setNumber] = useState('')
    const [gameText, setGameText] = useState('Guess The Number...?')
    const [count, setCount] = useState(0)
    const [numarray, setNumarray] = useState([])

    function logic() {
        if (number == '') {
            setGameText('Enter a number !');
        } else if (numarray.indexOf(number) !== -1) {
            setGameText('Number already exist');
            setNumber('');
        }
        else {
            if (number <= 100) {
                setCount(count + 1);
                setNumarray(prev => {
                    return [...prev, number]
                })
                setNumber('');
                if (number < ranum) {
                    setGameText('Greater number please');
                } else if (number > ranum) {
                    setGameText('Lower number please');
                } else if (number == ranum) {
                    navigation.navigate("Win", { count, numarray });
                    setCount(0);
                    setNumarray([]);
                    setGameText('Guess The Number...?');
                    setranum(yash);
                }
            }
            else {
                setGameText('invalid number');
                setNumber('');
            }
        }
    }

    return (
        <>
            <View style={styles.Img2}>
               <ImageBackground style={{width:299,height:130,marginTop:20}} source={require('../Image/31.gif')}/>
        </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>{gameText}</Text>
                <Text style={styles.emoji}>
                    {number.split(' ').map((word) => word && '🤔').join(' ')}
                </Text>
                <Text style={{ fontSize: 12, color: 'yellow', marginBottom: 6 }}>Guess the number From 0 - 100</Text>
                <TextInput style={styles.inputbox} onChangeText={newNumber => setNumber(newNumber)} defaultValue={number} keyboardType={'numeric'} />
                <Text style={styles.array1}>[
                    {numarray.map((a, index) => {
                        return <Text key={index} style={styles.array1}> {a} </Text>
                    })} ]
                </Text>
                <View style={styles.btn1}>
                    <Button title='Guess' color={'#0be0ab'} onPress={logic} />
                </View>
            </View>
        </>
    )
}

export default Letsplay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center"
    },
    container2: {
        flex: 2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    text1: {
        fontSize: 50,
        fontWeight: "500",
        color: '#0be0ab',
        borderBottomWidth: 2,
        borderBottomColor: 'red'
    },
    text2: {
        marginTop: 20,
        padding: 8,
        fontSize: 25,
        color: '#0be0ab',
        borderWidth: 2,
        borderColor: '#0be0ab',
        borderRadius: 12,
        width: 300,
        textAlign: "center"
    },
    emoji: {
        marginTop: 2,
        padding: 10,
        fontSize: 30,
        borderWidth: 2,
        textAlign: "center"
    },
    inputbox: {
        padding: 8,
        fontSize: 20,
        color: "yellow",
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        width: 150,
        height: 50,
        textAlign: 'center'
    },
    array1: {
        fontSize: 20,
        color: "yellow",
        marginTop: 3
    },
    btn1: {
        marginTop: 12,
        width: 140,
        backgroundColor: '#0be0ab',
        borderWidth: 8,
        borderColor: '#0be0ab',
        borderRadius: 25,
    }, Img2: {
        alignItems:"center",
        backgroundColor:"black",
        
    }

})