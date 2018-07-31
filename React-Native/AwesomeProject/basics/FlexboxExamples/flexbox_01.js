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
        for (var i = 0; i < 4; i++) {

            var yellowBoxes = [];
            if (i == 3) {
                for (var j = 0; j < 3; j++) {
                    var yellowBox = (<View style={styles.yellowBox} key={j}></View>);
                    yellowBoxes.push(yellowBox);
                }
            }
            
            // 最后一个紫色的 cell 用了 alignSelf 属性来调整自己的 flex container 中的布局
            var cell = (<View style={[styles.cell, i == 3 ? styles.alignSelf : null]} key={i}>
                    {
                        yellowBoxes
                    }
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
        height: 100,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,

    },

    alignSelf: {
        alignSelf: 'flex-end',
    },

    cell: {
        width: 80,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'purple',
        borderColor: 'black',
        borderWidth: 1,
    },
    yellowBox: {
        width: 20,
        height: 20,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1,
    }
});