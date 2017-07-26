/**
React Native 框架源码 https://github.com/facebook/react-native

 一个 豆瓣 客户端
 主要功能模块划分：
 - 豆瓣
   - 图书
     - 搜索
     - 列表
     - 详情
   - 电影
     - 搜索
     - 列表
     - webView 中打开详情页
   - 音乐
     - 搜索
     - 列表
     - webView 中打开详情页
  */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ScrollView,
  StatusBar,
  NavigatorIOS,
  Image,
} from 'react-native';

import BookList from './js/pages/book/BookList.js';
import Music from './js/pages/music/Music.js';
import Movie from './js/pages/movie/Movie.js';
import DBWebView from './js/components/WebView.js';

StatusBar.setHidden(true);
export default class DoubanApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'book',
    };
  }

  render() {
    return (

      <TabBarIOS>
        <TabBarIOS.Item
        title='图书'
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'book'}
        onPress={
          () => {
            this.setState({
             selectedTab: 'book',
           });
          }
        }>
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
              component: WebView,
              title: '图书',
              passProps: {},
            }}
            />

        </TabBarIOS.Item>

        <TabBarIOS.Item
        title='电影'
        systemIcon='history'
        selected={this.state.selectedTab === 'movie'}
        onPress={
          () => {
            this.setState({
             selectedTab: 'movie',
           });
         }
        }>
          <View style={{backgroundColor: 'blue', flex: 1}}></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
        title='音乐'
        systemIcon='featured'
        selected={this.state.selectedTab === 'music'}
        onPress={
          () => {
            this.setState({
             selectedTab: 'music',
           });
         }
        }>
          <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
              style={{width: 200, height: 200, marginTop: 100}}
              resizeMode='center'
              source={{uri: 'https://imgsa.baidu.com/baike/w%3D268/sign=a8324ff660d0f703e6b292da30fb5148/500fd9f9d72a6059070cf8fb2a34349b033bba36.jpg'}}/>
            </View>
          </ScrollView>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DoubanApp', () => DoubanApp);
