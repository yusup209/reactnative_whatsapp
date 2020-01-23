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

export default class TabPanggilan extends Component {
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
                "id": 1,
                "img_url": "http://www.brunningonline.net/simon/blog/archives/South%20Park%20Avatar.jpg",
                "title": "Bobotak",
                "desc": "gw mau cukur dulu ya...",
                "right_icon": "videocam",
            },
            {
                "id": 2,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "loe dmn?",
                "right_icon": "videocam",
            },
            ,
            {
                "id": 3,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "lorem ipsum dolor sit amet consectetur adipisicing elit euismod mpshh",
                "right_icon": "call",
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