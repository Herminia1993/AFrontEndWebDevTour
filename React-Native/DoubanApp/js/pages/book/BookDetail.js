/**
 * 图书详情
 */

 'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import Util from '../../utils/Util.js';
import Service from '../../utils/Service.js';
import BookItem from './BookItem.js';


export default class BookDetail extends Component {

  constructor() {
    super();

    this.state = {
      bookData: null,
    };
  }

  componentDidMount() {
    // 请求数据
    this._loadData();
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        {
          this.state.bookData ?
          <View>
            {/*头部介绍*/}
            <BookItem bookData={this.state.bookData}/>
            {/*评分*/}
            <View style={{borderBottomWidth: Util.onePixel, borderColor: '#ccc'}}>
              <Text style={styles.rating}>
                豆瓣评分：{this._stars(this.state.bookData.rating.average)}
                <Text style={styles.raterCount}>
                （共 {this.state.bookData.rating.numRaters} 人评价）
                </Text>
              </Text>
            </View>
            {/*图书简介*/}
            <View>
              <Text style={styles.bookDetailTitle}>图书简介</Text>
              <Text style={styles.bookDetailContent}>
              {this.state.bookData.summary.length ? this.state.bookData.summary : '暂无图书介绍'}
              </Text>
            </View>
            {/*作者简介*/}
            <View style={{marginTop: 20}}>
              <Text style={styles.bookDetailTitle}>作者简介</Text>
              <Text style={styles.bookDetailContent}>
              {this.state.bookData.author_intro.length ? this.state.bookData.author_intro : '暂无作者介绍'}
              </Text>
            </View>
            {/*底部留白*/}
            <View style={{height: 50}}></View>
          </View>
          :
          Util.loading
        }
      </ScrollView>
    );
  }

  // 请求数据
  _loadData() {
    var bookId = this.props.bookId;
    var that = this;  // 为什么这么写？
    var url = Service.bookDetail + '/' + bookId;

    Util.get(url,
      function(data) {
        that.setState({
          bookData: data,
        });
      },
      function(error) {
        alert(error);
      }
    );
  }

  // 计算评分的字符串
  _stars(rating) {

    // How do I convert a string into an integer in JavaScript?
    // https://stackoverflow.com/questions/1133770/how-do-i-convert-a-string-into-an-integer-in-javascript
    var starString = '';
    for (var i = 0; i < Math.round(rating) / 2.0; i++) {
      starString += '⭐️';
    }
    return starString + rating;
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rating: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  raterCount: {
    fontSize: 13,
    color: 'gray',
  },

  bookDetailTitle: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  bookDetailContent: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000D22',
    fontSize: 15,
    lineHeight: 22,
  },
});
