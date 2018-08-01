/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import MainView from './MainView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NavigatorIOS 
      initialRoute={{
        title: '30 Days of RN',
        component: MainView,
      }}
      style={{flex: 1}}

      />
    );
  }
}


