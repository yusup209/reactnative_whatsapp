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

export default class PembaruanDilihat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatArr: [],
            loaded: false,
        }
    }

    componentDidMount() {
        const chatArr = [
            {
                "id": 3,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak sMoel",
                "desc": "70 menit yang lalu, 14:02",
            }
        ];

        this.setState({ chatArr, loaded: true });
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
                <Container>
                    <List style={{ paddingBottom: 10 }}>
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