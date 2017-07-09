'use strict';

import React, { Component, PropTypes, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

var rawData = {"全部区域": {
  "全部区域": ["全部区域"],
  "热门商圈": [
    "虹桥地区",
    "徐家汇地区",
    "淮海路商业区",
    "静安寺地区",
    "浦东陆家嘴金融贸易区",
    "人民广场地区",
  ],
  "热门行政区": [
    "静安区",
    "徐汇区",
    "长宁区",
    "黄浦区",
  ]
},
"地铁沿线": {
  "地铁全线": ["地铁全线"],
  "1号线": ["莘庄站", "外环路站", "莲花路站"],
  "2号线": ["浦东国际机场站", "海天三路站", "远东大道站"],
},
};

// 设定内置的属性
var prefixType = '_type_';   // 选中项，例如：_type_0_2 表示第一个 Tab 选中，同时第二个 Tab 中的第三项被选中
var prefixStyle = '_style_'; // 选中项样式，例如：_style_0_2 表示第一个 Tab 选中，同时第二个 Tab 中的第三项被选中的样式
var defaultBackgroundColor = {backgroundColor: '#add8e6'}; // 默认情况下左侧选中的背景颜色


// 二级联动菜单
export default class CalendarApp extends Component {

  _didSelectedItem(itemName) {
    alert(itemName);
  }

  render() {
    return (
      <View style={{marginTop: 64, flex: 1}}>
        <MenuList data={rawData} tabSelected={0} nSelected={1} didSelectedItem={this._didSelectedItem}/>
      </View>
    );
  }

}


class MenuList extends Component {

  // 如何在 constructor 中访问 props
  // this.props is not available in Component constuctor https://github.com/facebook/react/issues/3599
  constructor(props) {
    super(props);

    var data = this.props.data;
    var tabSelected = this.props.tabSelected; // 头部选中的 index
    var nSelected = this.props.nSelected; // 左侧选择的 index

    var obj = {};
    var tabIndex = 0;
    // JavaScript 中的 for 循环 http://www.w3school.com.cn/js/js_objects.asp
    // for...in 循环中的代码块将针对每个属性执行一次。
    for (var tab in data) {
      var childData = data[tab];
      var sectionIndex = 0;

      for (var section in childData) {
        var type = prefixType + tabIndex + '_' + sectionIndex;
        var style = prefixStyle + tabIndex + '_' + sectionIndex;
        obj[type] = false;
        obj[style] = {};

        // 设置默认选中项
        if (tabSelected === tabIndex &&
          nSelected === sectionIndex) {
          obj[type] = true;
          obj[style] = defaultBackgroundColor;
        }

        sectionIndex++;
      }

      tabIndex++;
    }

    this.state = {
      selectedTabIndex: tabSelected,
      dataSource: obj,
      selectedSectionIndex: nSelected,
    };
  }

  _didSelectTab(tabIdx, tabName) {
    var data = this.props.data;
    var tabSelected = tabIdx; // 头部选中的 index
    var nSelected = 0; // 左侧选择的 index

    var obj = {};
    var tabIndex = 0;
    for (var tab in data) {
      var childData = data[tab];
      var sectionIndex = 0;

      for (var section in childData) {
        var type = prefixType + tabIndex + '_' + sectionIndex;
        var style = prefixStyle + tabIndex + '_' + sectionIndex;
        obj[type] = false;
        obj[style] = {};

        // 设置默认选中项
        if (tabSelected === tabIndex &&
          nSelected === sectionIndex) {
          obj[type] = true;
          obj[style] = defaultBackgroundColor;
        }

        sectionIndex++;
      }

      tabIndex++;
    }

    this.setState(
      {
        selectedTabIndex: tabSelected,
        dataSource: obj,
        selectedSectionIndex: nSelected,
      }
    );
  }

  _didSelectSection(sectionIndex, sectionName) {

    var data = this.props.data;
    var tabSelected = this.state.selectedTabIndex; // 头部选中的 index
    var nSelected = sectionIndex; // 左侧选择的 index

    var obj = {};
    var tabIndex = 0;
    for (var tab in data) {
      var childData = data[tab];
      var sectionIndex = 0;

      for (var section in childData) {
        var type = prefixType + tabIndex + '_' + sectionIndex;
        var style = prefixStyle + tabIndex + '_' + sectionIndex;
        obj[type] = false;
        obj[style] = {};

        // 设置默认选中项
        if (tabSelected === tabIndex &&
          nSelected === sectionIndex) {
          obj[type] = true;
          obj[style] = defaultBackgroundColor;
        }

        sectionIndex++;
      }

      tabIndex++;
    }

    this.setState(
      {
        selectedTabIndex: tabSelected,
        dataSource: obj,
        selectedSectionIndex: nSelected,
      }
    );
  }

  _didSelectItem(itemName) {
    // 这里用到了 this，所以在调用该函数时需要绑定 this
    this.props.didSelectedItem(itemName);
  }

  render() {
      return (
        <View style={styles.container}>
          <Header
            data={this.props.data}
            dataSource={this.state.dataSource}
            tabSelected={this.state.selectedTabIndex}
            didSelectTab={this._didSelectTab.bind(this)}/>
          <View style={[styles.flex_row, styles.flex_1]}>
            <LeftPannel
              data={this.props.data}
              dataSource={this.state.dataSource}
              tabSelected={this.state.selectedTabIndex}
              didSelectRow={this._didSelectSection.bind(this)}/>

            <RightPannel
              data={this.props.data}
              dataSource={this.state.dataSource}
              tabSelected={this.state.selectedTabIndex}
              nSelected={this.state.selectedSectionIndex}
              didSelectRow={this._didSelectItem.bind(this)}/>

          </View>
        </View>
  );
  }
}

// 头部
class Header extends Component {
  // Typechecking With PropTypes https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    data: PropTypes.object,
    didSelectTab: PropTypes.func,
    tabSelected: PropTypes.number,
  }

  render() {
    var data = this.props.data;
    var tabSelected = this.props.tabSelected;
    var header = [];
    var tabIndex = 0;

    for (var tabName in data) {
      var tabStyle = null;

      if (tabIndex === tabSelected) {
        tabStyle = [styles.header_text, styles.header_button_color_selected];
      } else {
        tabStyle = [styles.header_text];
      }

      var aHeaderTabItem = (
        <TouchableOpacity
          key={tabIndex}
          style={[styles.flex_1, styles.flex_center]}
          onPress={this.props.didSelectTab.bind(this, tabIndex, tabName)}>
          <Text style={tabStyle}>{tabName}</Text>
        </TouchableOpacity>
      );

      header.push(aHeaderTabItem);

      tabIndex++;
    }

    return (
      <View style={[styles.flex_row, styles.header]}>
        {header}
      </View>
    );
  }

}

// 左侧的列表
class LeftPannel extends Component {

  static propTypes = {
    data: PropTypes.object,
    dataSource: PropTypes.object,
    tabSelected: PropTypes.number,
    didSelectRow: PropTypes.func,
  }

  render() {

    var data = this.props.data;
    var tabSelected = this.props.tabSelected;

    var leftPannelItems = [];
    var tabIndex = 0;

    for (var tabName in data) {

      if (tabIndex === tabSelected) { // 当前选中的 tab

        var sectionIndex = 0;
        for (var sectionName in data[tabName]) {

          var style = this.props.dataSource[prefixStyle + tabIndex + '_' + sectionIndex];
          var anItem = (
            <Text
              key={sectionIndex}
              onPress={this.props.didSelectRow.bind(this, sectionIndex, sectionName)}
              style={[styles.list_item, style]}>
              {sectionName}
            </Text>
          );
          leftPannelItems.push(anItem);

          sectionIndex++;
        }

        break;
      }

      tabIndex++;
    }

    return (
      <ScrollView style={[styles.flex_1, styles.left_pannel]}>
        {leftPannelItems}
      </ScrollView>
    );
  }
}

// 右侧的列表
class RightPannel extends Component {

  static propTypes = {
    data: PropTypes.object,
    dataSource: PropTypes.object,
    tabSelected: PropTypes.number,
    nSelected: PropTypes.number,
    didSelectRow: PropTypes.func,
  }

  render() {
    var data = this.props.data;
    var tabSelected = this.props.tabSelected;
    var nSelected = this.props.nSelected;

    var itemList = [];
    var tabIndex = 0;
    for (var tabName in data) {
        if (tabSelected === tabIndex) { // 当前选中的 tab
          var sectionIndex = 0;
          for (var section in data[tabName]) {
            if (this.props.dataSource[prefixType + tabIndex + '_' + sectionIndex]) { // 当前选中的左侧
              var itemIndex = 0;
              for (var item in data[tabName][section]) {
                var anItemElement = (
                    <Text
                      key={itemIndex}
                      numberOfLines={1}
                      onPress={this.props.didSelectRow.bind(this, data[tabName][section][item])}
                      style={[styles.list_item]}>
                      {data[tabName][section][item]}
                     </Text>
                );
                itemList.push(anItemElement);
                itemIndex++;
              }
              break;
            }
            sectionIndex++;
          }
        }

        tabIndex++;
    }

    return (
      <ScrollView style={[styles.flex_1, styles.right_pannel]}>
        {itemList}
      </ScrollView>
    );
  }

}

 const styles = StyleSheet.create({

   // 共用部分
   container: {
     flex: 1,
     height: 240,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     borderColor: '#ddd',
   },

   flex_row: {
     flexDirection: 'row',
   },

   flex_1: {
     flex: 1,
   },

   flex_center: {
     justifyContent: 'center',
     alignItems: 'center',
   },

   // header 部分
   header: {
     height: 35,
     borderBottomWidth: 1,
     borderColor: '#DFDFDF',
   },

   header_text: {
     color: '#7B7B7B',
     fontSize: 15,
   },

   header_button_color_selected: {
     color: '#00B7EB',
   },

   header_button_bgcolor_selected: {
     backgroundColor: '#fff',
   },

   // 左侧面板
   left_pannel: {
     backgroundColor: '#F2F2F2',

   },

   list_item: {
     height: 30,
     lineHeight: 30,
     fontSize: 14,
     color: '#7C7C7C',
     textAlignVertical: 'center',
   },

   right_pannel: {
     marginLeft: 10,
   }

 });
