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

import { Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab, Separator } from 'native-base';
import ChatCard from '../components/ChatCard'
import PembaruanTerkini from './pembaruan_terkini';
import PembaruanDilihat from './pembaruan_dilihat';

export default class TabStatus extends Component {
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
                "desc": "20 menit yang lalu, 14:02",
            },
            {
                "id": 2,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "30 menit yang lalu, 14:02",
            },
            ,
            {
                "id": 3,
                "img_url": "https://materiell.com/wp-content/uploads/2015/03/john-small.png",
                "title": "Pak Moel",
                "desc": "70 menit yang lalu, 14:02",
            }
        ];

        this.setState({ chatArr, loaded: true });
    }

    render() {
        return (
            <Container style={{ flex: 1 }}>
                <ChatCard key="1" img_url="https://toppng.com/public/uploads/preview/free-png-whatsapp-png-png-images-transparent-whatsapp-logo-small-11562963264hticixipdx.png" title="Status saya" desc="ketuk untuk menambahkan status" />
                <View style={{ marginTop: 5 }}>
                    <Separator bordered>
                        <Text>Pembaruan Terkini</Text>
                    </Separator>
                </View>
                <PembaruanTerkini style={{ flex: 1 }}/>
                <View>
                    <Separator bordered>
                        <Text>Pembaruan yang telah dilihat</Text>
                    </Separator>
                </View>
                <PembaruanDilihat/>
            </Container>
        )
    }
}