/**
 * 定制头部组件主体
 */

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


import LeftIcon from './LeftIcon.js';
import Util from '../utils/Util.js';

export default class Header extends Component {

    render() {
      var obj = this.props.initObj;
      return (
          <View style={[styles.header, styles.row, styles.center]}>
          {/*返回按钮*/}
            <TouchableOpacity style={[styles.row, styles.center]} onPress={this._pop}>
              <LeftIcon/>
              <Text style={styles.fontFFF}>{obj.backName}</Text>
            </TouchableOpacity>
            {/*标题*/}
            <View style={[styles.title, styles.center]}>
              <Text style={[styles.fontFFF, styles.titlePos]}>{obj.title}</Text>
            </View>
          </View>
      );
    }

    // 点击返回按钮的操作
    _pop() {
      this.props.navigator.pop();
    }
}



var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  header: {
    height: 50,
    backgroundColor: '#3497FF',
  },
  fontFFF: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
  },
  titlePos: {
    marginLeft: -20,
    width: 200,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
