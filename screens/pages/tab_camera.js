import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
// import TheCamera from '../components/TheCamera'
import IniKamera from '../components/IniKamera'
import { View,Container } from 'native-base';

export default function TabCamera(){
    return(
        <Container style={{ flex: 1}}>
            <IniKamera/>
        </Container>
    )
}