import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { styles } from './styles'

export default function UserItem({ user }) {

  const navigation = useNavigation();
  const onPress = () => {
    //create a chatroom with him 

  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

