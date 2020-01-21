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

import { Container, Header, Body, Button, Icon, Text, Content, Title, Right, Tab, Tabs, ScrollableTab } from 'native-base';

import { MonoText } from '../components/StyledText';
import HeaderComponent from './layouts/header'
import HeaderTabs from './layouts/tabs'

export default function HomeScreen() {
  return (
    <Container>
      <HeaderComponent/>
      <HeaderTabs/>
    </Container>
  );
}