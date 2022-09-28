import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Users from "../../assets/dummy-data/Users";
import { styles } from './styles'

export default function ChatItem({ chatRoom }) {
  const user = chatRoom.users[1]
  return (
    <TouchableOpacity>
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

