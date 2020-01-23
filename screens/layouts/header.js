import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    ToolbarAndroid
} from 'react-native';

import { Picker, Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu"
import HeaderTabs from './tabs'

export default function HeaderComponent() {
    return (
        <Header style={styles.topBar} hasTabs androidStatusBarColor="#075E54">
            <Body>
                <Title>WhatsApp</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="search" />
                </Button>
                <Button transparent>
                    <Icon name="more" />
                </Button>

                {/* <MenuProvider style={{ flexDirection: 'column' }}>
                    <Menu onSelect={(() => { })}>
                        <MenuTrigger>
                            <Icon name="more" />
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={"Grup Baru"}>
                                <Text>Grup Baru</Text>
                            </MenuOption>
                            <MenuOption value={"Siaran Baru"}>
                                <Text>Siaran Baru</Text>
                            </MenuOption>
                            <MenuOption value={"WhatsApp Web"}>
                                <Text>WhatsApp Web</Text>
                            </MenuOption>
                            <MenuOption value={"Pesan berbintang"}>
                                <Text>Pesan berbintang</Text>
                            </MenuOption>
                            <MenuOption value={"Setelan"}>
                                <Text>Setelan</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </MenuProvider> */}
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