import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Users from "../../assets/dummy-data/Users";
import { styles } from './styles'

export default function ChatIcon({ chatRoom }) {
    const user = chatRoom.users[1]
    return (
        <View  style = {styles.imageHolder}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />
            <Text style={styles.name}>{user.name}</Text>
        </View>
    )
}
