import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { Container, List, Header, Body, Button, Icon, Text, Content, Title, Left, Right, Tab, Tabs, ScrollableTab, ListItem, Thumbnail, Spinner } from 'native-base';
import ChatCard from '../components/ChatCard'
let chatArrr = require('../../assets/json/messages.json')

export default class TabChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatArr: [],
            loaded: false,
        }
    }

    componentDidMount() {
        this.setState({ chatArr: chatArrr, loaded: true });
    }

    render() {
        if (!this.state.loaded === true) {
            return(
                <Container>
                    <Spinner/>
                </Container>
            )
        } else {
            return (
                <Container style={{ flex: 1 }}>
                    <List>
                        {
                            this.state.chatArr.map((item) => {
                                return (
                                    <ChatCard key={item.id} img_url={item.img_url} title={item.title} desc={item.desc} time={item.time} />
                                )
                            })
                        }
                    </List>
                </Container>
            )
        }
    }
}