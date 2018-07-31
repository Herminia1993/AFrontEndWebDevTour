'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class FlexboxExample02 extends Component {

    render () {
        return (
            <View style={styles.containerView}>
                <Image
                    style={styles.image}
                    source={require('../../resources/img/react-native-logo.png')}
                    resizeMode='cover'
                />
                <Text style={styles.text}>React Native</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    containerView: {
        top: 64,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    image: {
        height: 374 * 0.4,
        width: 737 * 0.4,
    },

    text: {
        // flex: 1, 使用 flex 的效果是撑满容器 view，不使用时的效果是包裹内容
        backgroundColor: '#87CEFA',
        fontSize: 20,
    },

});