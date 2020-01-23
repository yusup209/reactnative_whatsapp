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

export default class TabChat extends Component {
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
                "time": "13.24"
            },
            {
                "id": 2,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "loe dmn?",
                "time": "07.58"
            },
            ,
            {
                "id": 3,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "lorem ipsum dolor sit amet consectetur adipisicing elit euismod mpshh",
                "time": "07.58"
            }
        ];

        this.setState({ chatArr, loaded: true });
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