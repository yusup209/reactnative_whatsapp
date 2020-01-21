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

import { Container,  Fab, Icon } from 'native-base';

import { MonoText } from '../components/StyledText';
import HeaderComponent from './layouts/header'
import HeaderTabs from './layouts/tabs'

export default function HomeScreen() {
  return (
    <Container>
      <HeaderComponent/>
      <HeaderTabs/>
      <View style={{ flex: 1 }}>
        <Fab style={{ backgroundColor: '#25D366' }} position="bottomRight">
          <Icon name="chatboxes"/>
        </Fab>
      </View>
    </Container>
  );
}