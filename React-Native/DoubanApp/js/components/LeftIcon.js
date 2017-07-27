/**
 * 定制头部返回按钮
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Util from '../utils/Util.js';

export default class LeftIcon extends Component {
    render() {
      return (
        <View>
          <View style={styles.backButton}></View>
        </View>
      );
    }
}


var styles = StyleSheet.create({
  backButton: {
    borderLeftWidth: 4 * Util.onePixel,
    borderBottomWidth: 4 * Util.onePixel,
    width: 15,
    height: 15,
    transform: [{rotate: '45deg'}],
    borderColor: '#FFF',
    marginLeft: 10,
  }
});
