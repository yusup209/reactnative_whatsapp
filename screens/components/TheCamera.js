import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class TheCamera extends Component {
    constructor(props){
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }
    render() {
        const { hasPermission } = this.state

        if (hasPermission === null) {
            return <View />
        } else if (hasPermission === false) {
            return <Text>Camera access denied!</Text>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1, height: '100%' }} type={this.state.type}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}>
                                <Ionicons
                                    name="ios-photos"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}>
                                <FontAwesome
                                    name="camera"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}>
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )
        }
    }
}