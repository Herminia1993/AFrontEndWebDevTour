'use strict';

import React, { Component, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';


export default class CalendarApp extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}


 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'yellow',
   },

 });