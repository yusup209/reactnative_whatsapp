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
        return (
            <ListItem avatar onPress={() => { }}>
                <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: this.props.img_url }} />
                </Left>
                <Body>
                    <Text numberOfLines={1}>{this.props.title}</Text>
                    <Text note>{this.props.desc.substring(0, 40)}...</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name={this.props.right_icon} />
                    </Button>
                </Right>
            </ListItem>
        )
    }
}