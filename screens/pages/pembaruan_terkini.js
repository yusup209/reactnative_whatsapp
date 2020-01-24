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

import { Container,Spinner, List, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab, Separator } from 'native-base';
import ChatCard from '../components/ChatCard'
let recentStatus = require('../../assets/json/recentStatus.json')

export default class PembaruanTerkini extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatArr: [],
            loaded: false,
        }
    }

    componentDidMount() {
        this.setState({ chatArr: recentStatus, loaded: true });
    }

    render() {
        if (!this.state.loaded === true) {
            return (
                <Container>
                    <Spinner />
                </Container>
            )
        } else {
            return (
                <Container >
                    <List>
                        {
                            this.state.chatArr.map((item) => {
                                return (
                                    <ChatCard key={item.id} img_url={item.img_url} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </List>
                </Container>
            )
        }
    }
}