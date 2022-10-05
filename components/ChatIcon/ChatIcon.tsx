import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Users from "../../assets/dummy-data/Users";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/core";

export default function ChatIcon({ chatRoom }) {
    const user = chatRoom.users[1]

    const navigation = useNavigation();

    const navigating = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id })
    }
    
    return (
        <TouchableOpacity onPress = {navigating}>
            <View style={styles.imageHolder}>
                <Image source={{ uri: user.imageUri }} style={styles.image} />
                <Text style={styles.name}>{user.name.split(' ')[0]}</Text>
            </View>
        </TouchableOpacity>
    )
}
