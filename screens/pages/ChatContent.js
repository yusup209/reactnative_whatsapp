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

import { Spinner, List, Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';

// export default function ChatContent(props) {
//     let messages = useState([])
//     const { title } = props.route.params.title

//     onSend = messages

//     return (
//         <Container>
//             <Text>Konten Chattt</Text>
//             <Text>Nama : {title}</Text>
//         </Container>
//     )
// }

export default class ChatContent extends Component {
    state = {
        messages: [],
    }

    componentDidMount() {

    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <ChatHeader navigation={this.props.navigation}/>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})