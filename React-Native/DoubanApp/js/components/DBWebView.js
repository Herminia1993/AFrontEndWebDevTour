/**
 *  WebView 容器
 */

'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

import Util from '../utils/Util.js';


export default class DBWebView extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  render() {

    return (
      <View style={{flex: 1}}>
        {/*Web View*/}
        <WebView
         contentInset={{top: -46}}
         startInLoadingState={true}
         bounces={false}
         style={{width: Util.screenSize.width, height: Util.screenSize.height-50, backgroundColor: 'darkseagreen'}}
         source={{uri: this.props.url}}
         onError={
           (error) => {
             alert('Oops! 加载失败')
           }
         }
        >
        </WebView>
      </View>
    );
  }
}
