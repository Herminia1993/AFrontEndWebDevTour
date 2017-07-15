'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  PixelRatio,
} from 'react-native';


export default class CalendarApp extends Component {

  _didSelectedDate(dateString) {
    alert(dateString);
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
      '2017-11-15': 'checked',
    };

    var headerStyle = {
      backgroundColor: '#3C9BFD',
      color: '#ffffff',
      fontSize: 15,
      fontWeight: '500',
    };

    return (
      <View style={styles.container}>
        <Calender

          didSelectDate={this._didSelectedDate}
          headerStyle={headerStyle}
          holidays={holidays}
          startTime={new Date(2017, 7, 13)}
          checkedDates={checkedDates}
          numberOfMonths={10}
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

// 如果要在 constructor 方法中访问属性 this.props.xxx, 必须要声明参数 props
  constructor(props) {
    super(props);

    // 初始化参数，转换 model
    var startTime = this.props.startTime || new Date();
    var holidays = this.props.holidays || {};
    var checkedDates = this.props.checkedDates || {};
    var headerStyle = this.props.headerStyle || {};
    var numberOfMonths = this.props.numberOfMonths || 3;

    this.state = {
      startTime: startTime,
      holidays: holidays,
      checkedDates: checkedDates,
      headerStyle: headerStyle,
      numberOfMonths: numberOfMonths,
    };
  }

  render() {
    var date = this.state.startTime;
    var numberOfMonths = this.state.numberOfMonths;
    var holidays = this.state.holidays;
    var checkedDates = this.state.checkedDates;
    var headerStyle = this.state.headerStyle;
    var monthItems = [];
    var dateNow = new Date();  // Date 对象 http://www.w3school.com.cn/jsref/jsref_obj_date.asp

    for (var m = 0; m < numberOfMonths; m++) { // 循环完成 1 个月

      /**
       *  日历行数 = （1 号前面的空白格数 + 月份日期占用的格数）/ 7;
       *  1 号前面的空白格数 = 1 号星期几 - 1；
       *
       *  综上，日历行数 = Math.ceil((月份的天数 + 1号星期几 - 1) / 7);
       */
      var rows = [];
      var lastDate = new Date(date.getFullYear(), date.getMonth() + 1 + m, 0);  // 这个月的最后一天
      var firstDay = new Date(date.getFullYear(), date.getMonth() + m, 1);      // 这个月的第一天
      var numOfDays = lastDate.getDate();                 // 这个月的天数
      var theDayOf1stDay = firstDay.getDay();   // 第一天是星期几

      if (theDayOf1stDay === 0) { // 因为获取到的星期是从 0（周日） 到 6，所以我们这里把 0 当做 7 处理
        theDayOf1stDay = 7;
      }

      var rowCount = Math.ceil((numOfDays + theDayOf1stDay - 1) / 7);  // 本月一共占多少行


      for (var i = 0; i < rowCount; i++) {
        var days = [];
        for (var j = (i * 7) + 1; j < ((i + 1) * 7) + 1; j++) { // 绘制第 i 行
          // 根据每个月的第一天往后推
          var dayNum = j - theDayOf1stDay + 1;
          if (dayNum > 0  && j < numOfDays + theDayOf1stDay) {

            var dateObj = new Date(date.getFullYear(), date.getMonth() + m, dayNum);
            var dateString = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dayNum;
            var grayStyle = {};
            var bk = {};
            if (dateNow >= new Date(date.getFullYear(), date.getMonth() + m, dayNum + 1)) {
              grayStyle = {
                color: '#ccc',
              };
            }
            // 节假日
            if (holidays[dateString]) {
              dayNum = holidays[dateString];
            }
            // 标记的日期
            if (checkedDates[dateString]) {
              bk = {
                backgroundColor: '#1EB7FF',
                width: 46,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
              };

              grayStyle = {
                color: '#ffffff',
              }
            }

            var aDayElement = (
              <TouchableHighlight
                key={m.toString()+i.toString()+j.toString()}
                style={styles.proportionalFlex}
                underlayColor="#fff"
                onPress={this.props.didSelectDate.bind(this, dateString)}
                >
                <View style={bk}>
                  <Text style={grayStyle}>
                    {dayNum}
                  </Text>
                </View>

              </TouchableHighlight>
            );
            days.push(aDayElement);
          } else { // 如果当前日期小于今天，则变灰
            days.push(
              <View
                key={m.toString()+i.toString()+j.toString()}
                style={[styles.proportionalFlex]}>
                <Text></Text>
              </View>
            );
          }
        }
        rows.push(
          <View
            key={m.toString()+i.toString()}
            style={[styles.row]}>
            {days}
          </View>
        );
      }

      monthItems.push(

        <View
          key={m.toString()}
          style={styles.month_container}>
          <View style={styles.month_header}>
            <Text style={styles.month_text}>
              {lastDate.getFullYear()}年{lastDate.getMonth() + 1}月
            </Text>
          </View>
          {rows}
        </View>
      );
    }

    return (
      <View style={styles.calendar_container}>
        <View style={[styles.row, styles.row_header]}>
          {this._renderHeader()}
        </View>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {monthItems}
        </ScrollView>
      </View>
    );
  }

  _renderHeader() {
    var weekItems = [
    {
      title: '一',
      isHighlighted: false,
    },
    {
      title: '二',
      isHighlighted: false,
    },
    {
      title: '三',
      isHighlighted: false,
    },
    {
      title: '四',
      isHighlighted: false,
    },
    {
      title: '五',
      isHighlighted: false,
    },
    {
      title: '六',
      isHighlighted: true,
    },
    {
      title: '日',
      isHighlighted: true,
    },
    ];
    var weekItemsElement = [];

    for (var i = 0; i < weekItems.length; i++) {
      weekItemsElement.push(
        <View
          key={i}
          style={styles.proportionalFlex}>
          <Text style={this.props.headerStyle, weekItems[i].isHighlighted ? styles.week_highlight : null}>
            {weekItems[i].title}
          </Text>
        </View>
      );
    }

    return weekItemsElement;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    marginTop: 64,
  },

  proportionalFlex: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

  calendar_container:{
    backgroundColor:'#fff',
    flex:1,
    borderTopWidth:1/PixelRatio.get(),
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#ccc'
  },
  row_header:{
    backgroundColor:'#F5F5F5',
    borderBottomWidth:1/PixelRatio.get(),
    borderBottomColor:'#ccc',
  },
  row:{
    flexDirection:'row',
    height:35,
  },
  month_header:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },
  month_text:{
    fontSize:18,
    fontWeight:'400',
  },
  week_highlight:{
    color:'#23B8FC'
  },
  month_container:{
    borderBottomWidth:1/PixelRatio.get(),
    borderBottomColor:'#ccc',
  },

});
