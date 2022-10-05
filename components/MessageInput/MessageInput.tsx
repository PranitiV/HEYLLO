import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        setMessage('')
        console.warn(message)
    }

    const onPlusClicked = () => {

    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }
    return (
        <KeyboardAvoidingView style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset = {100}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="black" style={styles.icon} />

                <TextInput
                    style={styles.text}
                    placeholder='Say Heyllo'
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                />

                <Ionicons name="camera-outline" size={24} color="black" style={styles.icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} color="black" style={styles.icon} />
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>

                    {message ? <MaterialIcons name="send" size={22} color="white" /> :
                        <Text style={styles.button}>
                            +
                        </Text>}

                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
        fontSize: 37,
        bottom: 3,
        left: 1
    }
})

export default MessageInput

