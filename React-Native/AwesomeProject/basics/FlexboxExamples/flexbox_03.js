'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class FlexboxExample01 extends Component {

    render () {
        var cells = [];
        for (var i = 0; i < 6; i++) {
            
            // 最后一个紫色的 cell 用了 alignSelf 属性来调整自己的 flex container 中的布局
            var cell = (<View style={styles.cell} key={i}>
                            <Text style={styles.text}>{i}</Text>
                     </View>);
            cells.push(cell);
        }
        return (
            <View style={styles.containerView}>
                {cells}
            </View>
        );
    }

}


const styles = StyleSheet.create({
    containerView: {
        top: 130,
        width: 375,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,

    },

    cell: {
        width: 80,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        borderColor: 'black',
        borderWidth: 1,
    },

    text: {
        fontSize: 25,
        color: 'white',
    }
});