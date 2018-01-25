import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import launchImg from '../assets/image/launcher.png';
const styles = StyleSheet.create({
    viewport: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    launchImg: {
        maxWidth: '100%'
    },
    text: {
        color: 'rgba(0,0,0,0.5)'
    }
})
class Ad extends Component {
    render() {
        return (<View style={styles.viewport}>
            <StatusBar
                backgroundColor="#eaf3ff"
                barStyle="light-content"
            />
            <Image style={styles.launchImg} source={launchImg} resizeMode="contain" />
            <Text style={styles.text}>启动中...</Text>
        </View>)
    }
}

export default Ad