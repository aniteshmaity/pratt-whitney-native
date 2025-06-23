

import { Image } from 'expo-image';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function test() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/home/plane-amiation-home.gif')}
                style={styles.gif}
                autoplay={true}
                loop={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        width: 400,
        height: 400,
        position:"absolute",
        top:0
    },
});