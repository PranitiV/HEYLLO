import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

import { Feather } from 'react-native-vector-icons'

const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
    },
    inputContainer: {
        backgroundColor: 'lightgrey',
        flex: 1,
    },
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'purple'
    }
})

export default MessageInput

