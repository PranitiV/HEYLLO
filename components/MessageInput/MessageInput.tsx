import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="black" style={styles.icon} />

                <TextInput 
                    style={styles.text} 
                    placeholder='Say Heyllo' 
                    
                />

                <Ionicons name="camera-outline" size={24} color="black" style={styles.icon}/>
                <MaterialCommunityIcons name="microphone-outline" size={24} color="black" style={styles.icon}/>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.button}>
                    <MaterialIcons name="send" size={24} color="white" />
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        flex: 1,
        borderRadius: 20,
        marginRight: 5,
        justifyContent: 'center',
        padding: 5,
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
    },
    icon: {
        margin: 3,
    },
    text: {
        paddingHorizontal: 10,
        flex: 1,
    },
    buttonContainer: {
        width: 45,
        height: 45,
        backgroundColor: 'purple',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    button: {
        color: 'white',
        fontSize: 35,
    }
})

export default MessageInput

