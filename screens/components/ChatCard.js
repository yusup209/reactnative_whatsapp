import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ImageBackground,
} from 'react-native';

import { Container, List, Header, Body, Button, Icon, Text, Content, Title, Left, Right, Tab, Tabs, ScrollableTab, ListItem, Thumbnail, Badge } from 'native-base';

export default function ChatCard(props){
    const { img_url, title, desc, time, badge, navigation } = props
    return (
        <ListItem avatar onPress={() => {  }}>
            <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: img_url }}>

                </Thumbnail>
            </Left>
            <Body>
                <Text numberOfLines={1}>{title}</Text>
                <Text note>{desc}</Text>
            </Body>
            <Right>
                <Text note>{time}</Text>
            </Right>
        </ListItem>
    )
}