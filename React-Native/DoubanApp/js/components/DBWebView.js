/**
 *  WebView 容器
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

import Util from '../utils/Util.js';


export default class DBWebView extends Component {

  render() {
    return (
      <View>
        {/*Web View*/}
        <WebView
         contentInset={{top: 40}}
         startInLoadingState={true}
         style={{width: Util.screenSize.width, height: Util.screenSize.height-50}}
         source={{uri: this.props.url}}
        >
        </WebView>
      </View>
    );
  }
}
