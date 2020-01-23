import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import { Container, Fab, Icon } from 'native-base';

import { MonoText } from '../components/StyledText';
import HeaderComponent from './layouts/header'
import HeaderTabs from './layouts/tabs'

export default function HomeScreen() {
  return (
    <Container style={{ flex: 1 }}>
      <HeaderComponent />
      <HeaderTabs />
      <Fab style={{ backgroundColor: '#25D366' }} position="bottomRight">
        <Icon name="chatboxes" />
      </Fab>
    </Container>
  );
}