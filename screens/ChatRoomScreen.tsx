import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

//import message component 
import Message from '../components/Messages/Message';

import chatRoomData from '../assets/dummy-data/Chats'; 
import MessageInput from '../components/MessageInput/MessageInput';



export default function ChatRoomScreen() {
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
