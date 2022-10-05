import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { styles } from './styles'

export default function ChatItem({ chatRoom }) {
  const user = chatRoom.users[1]

  const navigation = useNavigation(); 
  const onPress = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id})
  }
  return (
    <TouchableOpacity onPress = {onPress}>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        {chatRoom.newMessages != null ? <View style={styles.noOfMess}>
          <Text style={styles.noOfText}> {chatRoom.newMessages} </Text>
        </View> : null}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

