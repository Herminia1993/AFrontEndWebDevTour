/**
 * 图书列表
 */

'use strict';

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';

import Util from '../../utils/Util.js';
import Service from '../../utils/Service.js';
import BookItem from './BookItem.js';
import SearchBar from '../../components/Search.js'
import BookDetail from './BookDetail.js';

export default class BookList extends Component {

  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([]),
      keywords: '资治通鉴',
      showList: false,
    };
  }

  componentDidMount() {
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
        {/*搜索工具条*/}
        <View style={[styles.searchBar, styles.flexRow]}>
          {/*输入框*/}
          <View style={styles.flex_1}>
            <SearchBar
               value={this.state.keywords}
               placeholder='请输入图书的名称'
               clearButtonMode='while-editing'
                onChangeText={this._textDidChange.bind(this)}/>
          </View>
          {/*搜索按钮*/}
          <TouchableOpacity style={styles.searchButton} onPress={this._didSelectSearchButton.bind(this)}>
            <Text style={styles.fontFFF}>搜索</Text>
          </TouchableOpacity>
        </View>
        {/*列表*/}
        {
          this.state.showList ?
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            />
          :
          Util.loading
        }
      </View>
    );
  }

/* 组件回调 */

  _textDidChange(text) {
    this.setState({
      keywords: text,
    });
  }

  _didSelectSearchButton() {

    if (this.state.keywords.length == 0) {
      alert('搜索词不能为空！');
      return;
    }
    this._loadData();
  }

  _renderRow(rowData) {
    return (
      <BookItem
        bookData={rowData}
        onPress={this._pushBookDetailPage.bind(this, rowData)}
        />
    );
  }

  // 查看详情
  _pushBookDetailPage(rowData) {
    var bookDetailRoute = {
      component: BookDetail,
      title: rowData.title,
      passProps: {
        bookId: rowData.id,
      }
    };

    this.props.navigator.push(bookDetailRoute);
  }

  /* 自定义方法 */

  // 请求接口数据
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
    marginTop: 64,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flex_1: {
    flex: 1,
  },

  searchBar: {
    padding: 10,
    height: 60,
    borderBottomWidth: Util.onePixel,
    borderColor: '#ccc',
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
