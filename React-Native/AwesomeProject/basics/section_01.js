'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Util from '../components-example/utils.js';
import FlexboxExample01 from './FlexboxExamples/flexbox_01.js'
import FlexboxExample02 from './FlexboxExamples/flexbox_02.js'
import FlexboxExample03 from './FlexboxExamples/flexbox_03.js'

export default class FlexboxExample extends Component {

    constructor(props) {
        super(props);
        this.pushNewSection = this.pushNewSection.bind(this);
    }

    pushNewSection(route) {
        this.props.navigator.push(route);
      }

    render() {
        var routes = [
            {
            component: FlexboxExample01,
            title: 'FlexboxExample01',
            },
            {
            component: FlexboxExample02,
            title: 'FlexboxExample02',
            },
            {
            component: FlexboxExample03,
            title: 'FlexboxExample03',
            },
        ];

        var cells = [];
        for (var i = 0; i < routes.length; i++) {
            let letI = i;
            var cell = (<TouchableOpacity 
                        style={styles.cell}
                        key={i}
                        onPress={() => {
                            this.pushNewSection(routes[letI]);
                        }}>
                            <Text style={styles.cellTitle}>{routes[i].title}</Text>
                        </TouchableOpacity>);
            cells.push(cell);
        }

      return (
        <View style={styles.container}>
            {cells}
        </View>
          
      );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 64,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cell: {
        height: 60,
        width: '100%',
        backgroundColor: '#00BFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cellTitle: {
        marginLeft: 15,
        fontSize: 20,
    }
});