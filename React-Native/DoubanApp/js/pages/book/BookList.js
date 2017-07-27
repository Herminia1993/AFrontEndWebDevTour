/**
 * 图书列表
 */

'use strict';

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';

import Util from '../../utils/Util.js';
import Service from '../../utils/Service.js';
import BookItem from './BookItem.js';
import SearchBar from '../../components/Search.js'

export default class BookList extends Component {

  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      keywords: 'C语言',
      showList: false,
    };
  }

  componentDidMount() {
    this._loadData();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/*搜索工具条*/}
        <View style={[styles.searchBar, styles.flexRow]}>
          {/*输入框*/}
          <View style={styles.flex_1}>
            <SearchBar placeholder='请输入图书的名称' onChangeText={this._textDidChange}/>
          </View>
          {/*搜索按钮*/}
          <TouchableOpacity style={styles.searchButton} onPress={this._didSelectSearchButton}>
            <Text style={styles.fontFFF}>搜索</Text>
          </TouchableOpacity>
        </View>
        {/*列表*/}
        {
          this.state.showList ?
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            />
          :
          Util.loading
        }
      </ScrollView>
    );
  }

/* 组件回调 */

  _textDidChange(text) {

  }

  _didSelectSearchButton() {

  }

  _renderRow(rowData) {
    return (
      <BookItem bookData={rowData}/>
    );
  }

  _pushBookDetailPage(id) {

  }

  /* 自定义方法 */
  _loadData() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    var that = this;
    var baseURL = Service.bookSearch + '?count=10&q=' + this.state.keywords;

    // 显示 loading
    this.setState({
      showList: false,
    });

    Util.get(baseURL,
      function(data) {
      if (!data.books || !data.books.length) {
         alert('图书服务出错');
         retun;
      }
      var books = data.books;
      that.setState({
        dataSource: dataSource.cloneWithRows(books),
        showList: true,
      });
    },
    function(error) {
      alert(error);
    }

  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flex_1: {
    flex: 1,
  },

  searchBar: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
  },

  searchButton: {
    width: 70,
    backgroundColor: '#0091FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fontFFF: {
    color: '#fff',
  },
});
