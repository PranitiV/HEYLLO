import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'

const myId = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myId;

    return (
        <View style={[
            styles.container, {
                backgroundColor: isMe ? 'lightgrey' : 'purple',
                marginLeft: isMe ? 'auto' : 10, 
                marginRight: isMe? 10: 'auto'
            }]}>
            <Text style={[styles.text, { color: isMe ? 'black' : 'white' }]}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',

    }
})


export default Message;