/**
 * 工具类
 */

'use strict';

import React, { Component } from 'react';
import {
   PixelRatio,
   ActivityIndicator,
} from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
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
        console.log(responseText);
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
  loading: <ActivityIndicator
  animating={true}
  size='large'
  style={{marginTop: 200}}
  />,

}


export default Util;
