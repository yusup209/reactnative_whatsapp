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
    render() {
        return (
            <Container>
                <ChatCard key="1" img_url="https://toppng.com/public/uploads/preview/free-png-whatsapp-png-png-images-transparent-whatsapp-logo-small-11562963264hticixipdx.png" title="Status saya" desc="ketuk untuk menambahkan status" />
                <View style={{ marginTop: 5 }}>
                    <Separator bordered>
                        <Text>Pembaruan Terkini</Text>
                    </Separator>
                </View>
                <PembaruanTerkini/>
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