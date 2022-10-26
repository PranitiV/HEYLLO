import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//importing components 
import ChatItem from '../components/ChatItem/ChatItem';
import ChatIcon from '../components/ChatIcon/ChatIcon';

import ChatRoomData from '../assets/dummy-data/Users'
import UserItem from '../components/UserItem/UserItem';

export default function UsersScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={ChatRoomData}
                renderItem={({ item }) => <UserItem user={item} />}
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