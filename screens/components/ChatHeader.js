import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Left, Body, Right } from 'native-base'

export default function ChatHeader({ navigation }) {
    return (
        <View style={styles.container}>
            <Left style={styles.backArrow}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="md-arrow-back" size={24} color='#fff' />
                </TouchableOpacity>

                <Text style={{ color: '#fff', fontSize: 16 }}>Chat Content</Text>
            </Left>
            <Body>

            </Body>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075E54',
        height: 55,
        display: 'flex',
        flexDirection: 'row',

    },
    btnBack: {
        paddingHorizontal: 16
    },
    backArrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})