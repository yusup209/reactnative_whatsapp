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

import {Container, List, Header, Body, Button, Icon, Text, Content, Title, Left, Right, Tab, Tabs, ScrollableTab, ListItem, Thumbnail, Badge } from 'native-base';

export default class ChatCard extends Component {
    render() {
        return (
            <ListItem avatar onPress={() => { }}>
                <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: this.props.img_url }}/>
                </Left>
                <Body>
                    <Text numberOfLines={1}>{this.props.title}</Text>
                    <Text note>{this.props.desc}</Text>
                </Body>
                <Right>
                    <Text note>{this.props.time}</Text>
                </Right>
            </ListItem>
        )
    }
}