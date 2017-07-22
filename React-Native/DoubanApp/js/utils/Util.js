'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');


var {
  PixelRatio,
  ActivityIndicatorIOS,
} = React;


module.exports = {
  onePixel: 1 / PixelRatio.get(), // 一像素
  screenSize: {
    width: Dimensions.get('window').width,  // 屏幕宽度
    height: Dimensions.get('window').height, // 屏幕高度
  },

  /**
   * 基于 fetch 的 get 方法
   * @param  {string} url             请求的链接
   * @param  {function} successCallback 请求成功时的回调
   * @param  {function} failureCallback 请求失败时的回调
   */
  get(url, successCallback, failureCallback) {
    fetch(url)
    .then(
      (response) => response.text()
    )
    .then(
      (responseText) => {
        successCallback(JSON.parse(responseText));
      }
    )
    .catch(
      (error) => {
        failureCallback(error);
      }
    );
  },

  /**
   * 用于等待加载时显示的 loading 组件
   * @type {Component}
   */
  loading: <ActivityIndicatorIOS color="#3EOOFF"
  style={marginTop: 40, marginLeft: Dimensions.get('window').width/2-10}>

},
