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

export default class CallCard extends Component {
    render() {
        const { img_url, title, desc, right_icon } = this.props
        return (
            <ListItem avatar onPress={() => { }}>
                <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: img_url }} />
                </Left>
                <Body>
                    <Text numberOfLines={1}>{title}</Text>
                    <Text note>{desc.substring(0, 40)}...</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name={right_icon} />
                    </Button>
                </Right>
            </ListItem>
        )
    }
}