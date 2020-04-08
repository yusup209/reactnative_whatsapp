import * as WebBrowser from 'expo-web-browser';
import React, { Component, useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import ChatHeader from '../components/ChatHeader'
import Fire from '../../configs/Fire'
import { Ionicons } from '@expo/vector-icons'
import { Left, List, Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';

export default class ChatContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    get user() {
        return {
            name: this.props.route.params.name,
            _id: Fire.shared.uid
        }
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }

    // onSend(messages = []) {
    //     this.setState(previousState => ({
    //         messages: GiftedChat.append(previousState.messages, messages),
    //     }))
    // }

    render() {
        return (
            <View style={styles.container}>
                {/* <ChatHeader navigation={this.props.navigation}/> */}
                <View style={styles.container2}>
                    <Left style={styles.backArrow}>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="md-arrow-back" size={24} color='#fff' />
                        </TouchableOpacity>

                        <Text style={{ color: '#fff', fontSize: 16 }}>{this.props.route.params.name}</Text>
                    </Left>
                </View>
                <GiftedChat
                    messages={this.state.messages}
                    // onSend={messages => this.onSend(messages)}
                    onSend={Fire.shared.send}
                    // user={{
                    //     _id: 1,
                    // }}
                    user={this.user}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
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