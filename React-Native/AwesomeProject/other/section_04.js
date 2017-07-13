import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';


export default class CalendarApp extends Component {

  _didSelectedDate() {

  }

  render() {
    var holidays = {
      '2017-10-1': '国庆节',
      '2017-9-10': '教师节',
      '2018-1-1': '元旦节',
      '2017-11-11': '光棍节',
    };

    var checkedDates = {
      '2017-10-1': 'checked',
      '2017-9-8': 'checked',
      '2017-7-10': 'checked',
      '2017-8-1': 'checked',
    };

    var headerStyle = {
      backgroundColor: '#3C9BFD',
      color: '#fff',
      fontSize: 15,
      fontWeight: 500,
    };

    return (
      <View style={styles.container}>
        <Calender
          didSelectDate={this._didSelectedDate}
          headerStyle={headerStyle}
          holidays={holidays}
          startTime={new Date(2017, 7, 13)}
          checkedDates={checkedDates}
          numberOfMonths={5}
          />
      </View>
    );
  }
}

// 日历组件的功能
// 1.全页面日历的实现，可以传入参数，显示多少个月份，默认 3 个
// 2.可以定义日历的当前日期
// 3.历史日期以灰色字体展示，今天及以后的日期以黑色字体展示
// 4.可以传入标记日期，并在日历中高亮显示（蓝色背景，白色字体）
// 5.可以自定义星期栏的字体大小和背景颜色
// 6.显示节假日
// 7.点击日期获取对应的字符串
class Calender extends Component {
  startTime: Date;
  holidays: object;
  checkedDates: object;
  headerStyle: object;
  numberOfMonths: object;

  constructor() {
    super();

    this.startTime = this.props.startTime || new Date();
    this.holidays = this.props.holidays || {};
    this.checkedDates = this.props.checkedDates || {};
    this.headerStyle = this.props.headerStyle || {};
    this.numberOfMonths = this.props.numberOfMonths || 3;
  }

  render() {
    return (
      <View> </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },

  proportionalFlex: {
    flex: 1,
  },
});
