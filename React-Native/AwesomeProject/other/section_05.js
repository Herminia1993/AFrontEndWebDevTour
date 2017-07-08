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
      <View style={{marginTop: 100, flex: 1}}>
        <MenuList/>
      </View>
    );
  }
}


class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      wholeArea: false,
      hotBusiness: false,
      hotDistrict: false,
      wholeAreaFFF: {},
      hotBusinessFFF: {backgroundColor: '#f6f6f6'},
      hotDistrictFFF: {},
    };
  }

  render() {
      return (
        <View style={styles.container}>
          <Header/>
          <View style={[styles.flex_row, styles.flex_1]}>
            <ScrollView style={[styles.flex_1, styles.left_pannel]}>
              <Text style={[styles.left_row, this.state.wholeAreaFFF]}>
                全部区域
              </Text>
              <Text style={[styles.left_row, this.state.hotBusinessFFF]}>
                热门商圈
              </Text>
              <Text style={[styles.left_row, this.state.hotDistrictFFF]}>
                热门行政区
              </Text>
            </ScrollView>
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
   left_pannel_bgcolor: {
     backgroundColor: '#F2F2F2',
   },

   left_row: {
     height: 30,
     lineHeight: 20,
     fontSize: 14,
     color: '#7C7C7C',
   },

   right_pannel: {
     marginLeft: 10,
   }

 });
