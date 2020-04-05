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

export default class ChatContent extends Component {
    constructor(props){
        super(props)
        const { title } = props
        this.state = {
            name: '',
        }
    }
    render(){
        return(
            <Container>
                <Text>Konten Chattt</Text>
                <Text>Nama : { title }</Text>
            </Container>
        )
    }
}