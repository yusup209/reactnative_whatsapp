import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';
import HeaderTabs from './tabs'

export default function HeaderComponent() {
    return (
        <Header style={styles.topBar} hasTabs>
            <Body>
                <Title>Whatsapp</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="search" />
                </Button>
                <Button transparent>
                    <Icon name="more" />
                </Button>
            </Right>
        </Header>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    topBar: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#075E54',
    }
});