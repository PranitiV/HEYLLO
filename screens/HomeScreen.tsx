import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//importing components 
import ChatItem from '../components/ChatItem/ChatItem';
import ChatIcon from '../components/ChatIcon/ChatIcon';

import ChatRoomData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRoomData}
        renderItem={({ item }) => <ChatIcon chatRoom={item} />}
        horizontal
        showsVerticalScrollIndicator={true}
        style={styles.topView}
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
  topView: {
    height: 100,
  }
});
