import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

//import message component 
import Message from '../components/Messages/Message';

import chatRoomData from '../assets/dummy-data/Chats'; 
import MessageInput from '../components/MessageInput/MessageInput';

import { useRoute, useNavigation } from '@react-navigation/core';

export default function ChatRoomScreen() {
    const route = useRoute(); 
    const navigation = useNavigation(); 
    
    navigation.setOptions({title: 'Praniti'})
    return ( 
        <SafeAreaView style = {styles.page}>
            <FlatList 
                data = {chatRoomData.messages}
                renderItem = {({item}) => <Message message = {item}/>}
                style = {styles.flatlist}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white', 
        flex: 1, 
    }, 
    flatlist: {

    }, 

});
