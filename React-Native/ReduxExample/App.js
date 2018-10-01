/**
 * Sample React Native Redux App
 * https://medium.com/@imranhishaam/react-native-with-redux-for-beginners-6281959a2899
 * https://github.com/ImranHishaam/react-native-redux-counter-app
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './App/Reducers/index';
import CounterAction from './App/Actions/CounterAction';

/*
 * App 入口
 * 在这里进行 Redux 的初始化，设置 store，进行事件和属性的绑定
 */
export default class App extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterAction />
            </Provider>
        );
    }
}
