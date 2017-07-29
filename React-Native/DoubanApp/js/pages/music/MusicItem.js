/**
 * 音乐 item
 *
 */
 'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Util from '../../utils/Util.js';

export default class MusicItem extends Component {

  static propTypes = {
    musicData: PropTypes.object.isRequired,
  }
  // {/*时间和评分*/}
  // <View style={styles.flexRow}>
  //   <Text
  //     style={{flex: 1, marginTop: 5, marginLeft: 20}}
  //     numberOfLines={1}
  //     >
  //     时间：{this.props.musicData.attrs.pubdate}
  //   </Text>
  //   <Text style={{width: 120}} numberOfLines={1}>
  //     评分：{this._stars(this.props.musicData.rating.average)}
  //   </Text>
  // </View>
  // {/*查看详情*/}
  render() {
    return (
      <View style={styles.container}>
        {/*图片*/}
        <View style={styles.flexCenter}>
          <Image style={styles.movieCover} source={{uri: this.props.musicData.image}}/>
        </View>
        {/*曲目和演唱者*/}
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
          style={{marginLeft: 10}}
          numberOfLines={1}
            >
            曲目：{this.props.musicData.title}
          </Text>
          <Text style={{width: 150, textAlign: 'left'}} numberOfLines={1}>
            演唱：{this.props.musicData.author[0].name}
          </Text>
        </View>
        {/*时间和评分*/}
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
          style={{marginLeft: 10}}
          numberOfLines={1}
            >
            评分：{this._stars(this.props.musicData.rating.average)}
          </Text>
          <Text style={{width: 150, textAlign: 'left'}} numberOfLines={1}>
            时间：{this.props.musicData.attrs.pubdate}
          </Text>
        </View>
        {/*查看详情*/}
        <View style={styles.flexCenter}>
          <TouchableOpacity
            style={styles.viewDetailButton}
            onPress={this.props.viewDetail}>
            <Text>详情</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 计算评分的字符串
  _stars(rating) {

    // How do I convert a string into an integer in JavaScript?
    // https://stackoverflow.com/questions/1133770/how-do-i-convert-a-string-into-an-integer-in-javascript
    var starString = '';
    for (var i = 0; i < Math.round(rating) / 2.0; i++) {
      starString += '⭐️';
    }
    return starString + ' ' + rating;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: Util.onePixel,
    borderBottomWidth: Util.onePixel,
    borderColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
    height: 200,
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
  },

  movieCover: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  viewDetailButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 80,
    borderWidth: Util.onePixel,
    borderColor: '#3C9BFD',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 3,
  },
});
