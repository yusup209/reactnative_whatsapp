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

export default class ChatCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: ''
        }
    }

    componentDidMount() {
        this.setState({
            item: this.props
        })
    }

    render() {
        return (
            <ListItem avatar onPress={() => { this.props.navigation.navigate("ChatContent", {name: this.state.item.title}) }}>
                <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: this.state.item.img_url }}></Thumbnail>
                </Left>

                <Body>
                    <Text numberOfLines={1}>{this.state.item.title}</Text>
                    <Text note>{this.state.item.desc}</Text>
                </Body>

                <Right>
                    <Text note>{this.state.item.time}</Text>
                </Right>
            </ListItem >
        )
    }

}

// export default function ChatCard(props){
//     const { img_url, title, desc, time, badge} = props
//     return (
//         <ListItem avatar onPress={() => { }}>
//             <Left style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Thumbnail style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} source={{ uri: img_url }}>

//                 </Thumbnail>
//             </Left>
//             <Body>
//                 <Text numberOfLines={1}>{title}</Text>
//                 <Text note>{desc}</Text>
//             </Body>
//             <Right>
//                 <Text note>{time}</Text>
//             </Right>
//         </ListItem>
//     )
// }