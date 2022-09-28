import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import ChatItem from '../components/ChatItem/ChatItem';

import ChatRoomData from '../assets/dummy-data/ChatRooms'

const chat1 = ChatRoomData[0];
const chat2 = ChatRoomData[1];
const chat3 = ChatRoomData[2];

export default function TabOneScreen() {
  return (
      <View style={styles.page}>
        <FlatList
          data={ChatRoomData}
          renderItem={({ item }) => <ChatItem chatRoom={item} />}
          horizontal
        />
        <FlatList
          data={ChatRoomData}
          renderItem={({ item }) => <ChatItem chatRoom={item} />}
          showsVerticalScrollIndicator={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
