/**
 * 定制头部返回按钮
 */

'use strict';

var React = require('react-native');
var Util = require('../utils/Util.js');

var {
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.creaeClass({
    render() {
      return (
        <View>
          <View style={styles.backButton}></View>
        </View>
      );
    }
});


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
