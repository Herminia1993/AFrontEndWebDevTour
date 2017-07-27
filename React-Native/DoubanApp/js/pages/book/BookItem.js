/**
 * 图书列表项组件
 */

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Util from '../../utils/Util.js';

export default class BookItem extends Component {
  render() {
    var bookData = this.props.bookData;
    return (
      <TouchableOpacity style={styles.container} {...this.props}>
        {/*左侧的图片*/}
        <View style={styles.center}>
          <Image source={{uri: bookData.image}} style={styles.bookCover}/>
        </View>
        {/*右侧的文字*/}
        <View style={styles.textContent}>
        {/*标题*/}
          <View>
            <Text style={{width: 200}} numberOfLines={1}>{bookData.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    marginTop: 5,
    marginBottom: 5,
    borderTopWidth: Util.onePixel,
    borderBottomWidth: Util.onePixel,
    borderColor: '#ccc',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookCover: {
    width: 80,
    height: 100,
    resizeMode: Image.resizeMode.contain,
  },

  textContent: {
    marginTop: 10,
    marginBottom: 10,
  },

});
