'use strict';

import React, { Component, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

// 二级联动菜单
export default class MenuListApp extends Component {
  render() {
    return (
      <View style={{marginTop: 64, flex: 1}}>
        <MenuList/>
      </View>
    );
  }
}


class MenuList extends Component {
  constructor() {
    super();

    this.state = {
      isWholeAreaSelected: false,
      isHotBusinessSelected: true,
      isHotDistrictSelected: false,
      wholeAreaFFF: {},
      hotBusinessFFF: {backgroundColor: '#add8e6'},
      hotDistrictFFF: {},
    };

    // this._didSelectWholeAreaSection = this._didSelectWholeAreaSection.bind(this);
  }

  _didSelectWholeAreaSection() {

    this.setState(
      {
        isWholeAreaSelected: true,
        isHotBusinessSelected: false,
        isHotDistrictSelected: false,
        wholeAreaFFF: {backgroundColor: '#add8e6'},
        hotBusinessFFF: {},
        hotDistrictFFF: {},
      }
    );
  }

  _didSelectHotBusinessSection() {
    this.setState(
      {
        isWholeAreaSelected: false,
        isHotBusinessSelected: true,
        isHotDistrictSelected: false,
        wholeAreaFFF: {},
        hotBusinessFFF: {backgroundColor: '#add8e6'},
        hotDistrictFFF: {},
      }
    );
  }

  _didSelectHotDistrictSection() {
    this.setState(
      {
        isWholeAreaSelected: false,
        isHotBusinessSelected: false,
        isHotDistrictSelected: true,
        wholeAreaFFF: {},
        hotBusinessFFF: {},
        hotDistrictFFF: {backgroundColor: '#add8e6'},
      }
    );
  }

  render() {
      return (
        <View style={styles.container}>
          <Header/>
          <View style={[styles.flex_row, styles.flex_1]}>
            <LeftPannel
              wholeAreaFFF={this.state.wholeAreaFFF}
              hotBusinessFFF={this.state.hotBusinessFFF}
              hotDistrictFFF={this.state.hotDistrictFFF}
              didSelectWholeAreaSection={this._didSelectWholeAreaSection.bind(this)}
              didSelectHotBusinessSection={this._didSelectHotBusinessSection.bind(this)}
              didSelectHotDistrictSection={this._didSelectHotDistrictSection.bind(this)}
              />

            {
            this.state.isWholeAreaSelected
                ? <RightPannel itemTitles={['全部区域']}/>
                : null
            }
            {
            this.state.isHotBusinessSelected
                ? <RightPannel itemTitles={['虹桥地区', '徐家汇地区', '淮海路商业区', '静安寺地区']}/>
                : null
            }
            {
            this.state.isHotDistrictSelected
                ? <RightPannel itemTitles={['静安区', '徐汇区', '黄浦区', '虹口区']}/>
                : null
            }

          </View>
        </View>
  );
  }
}

// 头部
class Header extends Component {
  render() {
    return (
      <View style={[styles.flex_row, styles.header]}>
        <View style={[styles.flex_1, styles.flex_center]}>
          <Text style={[styles.header_text, styles.header_button_color_selected]}>全部区域</Text>
        </View>
        <View style={[styles.flex_1, styles.flex_center]}>
          <Text style={styles.header_text}>地铁沿线</Text>
        </View>
      </View>
    );
  }

}

// 左侧的列表
class LeftPannel extends Component {

  render() {
    return (
      <ScrollView
        style={[styles.flex_1, styles.left_pannel]}>
        <Text
          style={[styles.list_item, this.props.wholeAreaFFF]}
          onPress={this.props.didSelectWholeAreaSection}>
          全部区域
        </Text>
        <Text
          style={[styles.list_item, this.props.hotBusinessFFF]}
          onPress={this.props.didSelectHotBusinessSection}>
          热门商圈
        </Text>
        <Text
          style={[styles.list_item, this.props.hotDistrictFFF]}
          onPress={this.props.didSelectHotDistrictSection}>
          热门行政区
        </Text>
      </ScrollView>
    );
  }
}

// 右侧的列表
class RightPannel extends Component {


  render() {
    var itemList = [];
    for (var i in this.props.itemTitles) {
      // 遍历时必须要添加 key 属性
        var anItemElement = (
            <Text
              key={i}
              numberOfLines={1}
              style={[styles.list_item]}>
              {this.props.itemTitles[i]}
             </Text>
        );
        itemList.push(anItemElement);
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
