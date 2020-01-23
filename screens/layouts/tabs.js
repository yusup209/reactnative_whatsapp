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

import { Container, Center, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import TabCamera from '../pages/tab_camera'
import TabChat from '../pages/tab_chat'
import TabStatus from '../pages/tab_status'
import TabPanggilan from '../pages/tab_panggilan'

export default function TabsComponent() {
    return (
        <Tabs tabBarBackgroundColor="#075E54" renderTabBar={() => <ScrollableTab />}>
            <Tab heading={ <TabHeading style={{ backgroundColor: '#075E54' }}><Icon name="camera"/></TabHeading> }>
                <TabCamera/>
            </Tab>
            <Tab heading="CHAT" tabStyle={style.WATabs} activeTabStyle={style.WATabs}>
                <TabChat/>
            </Tab>
            <Tab heading="STATUS" tabStyle={style.WATabs} activeTabStyle={style.WATabs}>
                <TabStatus/>
            </Tab>
            <Tab heading="PANGGILAN" tabStyle={style.WATabs} activeTabStyle={style.WATabs}>
                <TabPanggilan/>
            </Tab>
        </Tabs>
    )
}

const style = StyleSheet.create({
    WATabs: {
        backgroundColor: '#075E54',
    },
    WATabs_inactive: {
        backgroundColor: '#128C7E',
    }
});