
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';


export default class ScrollViewApp extends Component {

  constructor() {
    super();

    this.state = {
      buttonTitle: 'Show ActivityIndicator',
      animating: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._showSmallActivityIndicator.bind(this)}>
          <Text style={styles.buttonTitle}>
             {this.state.buttonTitle}
           </Text>
       </TouchableOpacity>
        <ActivityIndicator
        animating={this.state.animating}
        style={styles.indicator}
        color='blue'
        size="large"
        />
      </View>
    );
  }

  _showSmallActivityIndicator() {
    var buttonTitle = this.state.animating ? 'Show ActivityIndicator' : 'Hide ActivityIndicator';
    this.setState((prevState, props) => {
      return {
        animating: !prevState.animating,
        buttonTitle: buttonTitle,
      };
    });

  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  button: {
    marginTop: 100,
    backgroundColor: '#f4f4f4',
    margin: 20,
    height: 50,
    justifyContent: 'center',
  },

  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
  },

  indicator: {
    marginTop: 150,
  },

});
