import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Game = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.Img2}>
                    <Image style={{ width: 290, height: 290 }} source={require('../Image/i.gif')} />
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text3}>How to Play</Text>
                <Text style={styles.text2}>1. A Random number will Generated. </Text>
                <Text style={styles.text2}>2. You have to guess what is the Number  </Text>
                <Text style={styles.text2}>3. Hint's Will be given</Text>
                <Text style={styles.text2}>4. You have to input your number in the input box </Text>
                <Text style={styles.text2}>5. Click on Lets Play To Start  </Text>
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Letsplay") }}>
                        <Image style={styles.Img1} source={require('../Image/button.jpeg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Game
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
    },
    container2: {
        flex: 2,
        backgroundColor: "black",
        alignItems: "center",
    },
    container3: {
        flex: 3,
        backgroundColor: "black",
        alignItems: "center",
    },
    text1: {
        fontSize: 70,
        fontWeight: '700',
        color: "#0be0ab",
        marginTop: 50
    },
    text2: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: "center",
        color: "#0be0ab",
        marginBottom: 4,
    },
    text3: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: "center",
        color: "#0be0ab",
        marginBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: "#0be0ab",
        marginHorizontal: 120
    },
    text4: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: "center",
        color: "#0be0ab",
        marginTop: 120,
        borderBottomWidth: 2,
        borderBottomColor: "#0be0ab"
    },
    Img1: {
        borderWidth: 2,
        borderColor: "#0be0ab",
        marginTop: 120,
        borderRadius: 15,
        width: 270,
        height: 50
    }
})