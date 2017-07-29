/**
 * 图书列表项组件
 */

'use strict';

import React, {
  Component,
  PropTypes
 } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Util from '../../utils/Util.js';

export default class BookItem extends Component {
  // 声明属性的类型
  static propTypes = {
    bookData: PropTypes.object.isRequired,
  };

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
            <Text style={styles.bookTitle} numberOfLines={1}>{bookData.title}</Text>
          </View>
          {/*出版社*/}
          <View style={{marginTop: 10}}>
            <Text style={styles.bookPublisherAndAuthor} numberOfLines={1}>{bookData.publisher}</Text>
          </View>
          {/*作者*/}
          <View style={{marginTop: 10}}>
            <Text style={styles.bookPublisherAndAuthor} numberOfLines={1}>{bookData.author}</Text>
          </View>
          {/*页数*/}
          <View style={[styles.flexRow, {marginTop: 10, alignItems: 'center'}]}>
            <Text style={styles.bookPrice}>{bookData.price}</Text>
            <Text style={styles.bookPages}>共 {bookData.pages} 页</Text>
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

  flexRow: {
    flexDirection: 'row',
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
    marginLeft: 10,
  },

  bookTitle: {
    width: 200,
  },

  bookPublisherAndAuthor: {
    color: '#A3A3A3',
    width: 200,
    fontSize: 13,
  },

  bookPages: {
    marginLeft: 10,
    color: '#A7A0A0',
  },

  bookPrice: {
    color: '#2BB2A3',
    fontSize: 16,
  },

});
