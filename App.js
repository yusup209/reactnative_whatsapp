import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen'
import ChatContent from './screens/pages/ChatContent'

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import AppNavigator from './navigation/AppNavigator';

// const mainNavigator = createStackNavigator({
//   Home: { screen: HomeScreen },
//   ChatContent: { screen: ChatContent }
// })

const mainStack = createStackNavigator()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const {navigation} = props
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {/* <HomeScreen/> */}
        <NavigationContainer>
          <mainStack.Navigator screenOptions={{ gestureEnabled: true }}>
            <mainStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} navigation={navigation}/>
            <mainStack.Screen name="ChatContent" options={{ headerShown: false }}>
              {props => <ChatContent {...props} />}
            </mainStack.Screen>
          </mainStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
