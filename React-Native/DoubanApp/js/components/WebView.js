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
import Header from './Header.js';


export default class DBWebView extends Component {

  render() {
    return (
      <View>
        {/*头部导航条*/}
        <Header
        navigator={this.props.navigator}
        initObj={{
          backName: this.props.backName,
          title: this.props.title,
        }}
        />
        {/*Web View*/}
        <WebView
         contentInset={{top: 40}}
         startInLoadingState={true}
         style={{width: Util.screenSize.width, height: Util.screenSize.height-50}}
         url={this.props.url}
        >
        </WebView>
      </View>
    );
  }
}
