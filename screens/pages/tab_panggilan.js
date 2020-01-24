import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { Spinner, List, Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';
import CallCard from '../components/CallCard'
let calls = require('../../assets/json/calls.json')

export default class TabPanggilan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatArr: [],
            loaded: false,
        }
    }

    componentDidMount() {
        this.setState({ chatArr: calls, loaded: true });
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
                <Container style={{ flex: 1 }}>
                    <List>
                        {
                            this.state.chatArr.map((item) => {
                                return (
                                    <CallCard key={item.id} img_url={item.img_url} title={item.title} desc={item.desc} right_icon={item.right_icon} />
                                )
                            })
                        }
                    </List>
                </Container>
            )
        }
    }
}