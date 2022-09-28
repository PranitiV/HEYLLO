import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,

    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    noOfMess: {
        backgroundColor: 'purple',
        width: 25,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 50,
        top: 10,
        borderWidth: 1,
        borderColor: 'white',

    },
    noOfText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    name: {
        fontWeight: '700',
        fontSize: 18,
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    text: {
        color: 'grey',
        fontSize: 15,
    },
});