/**
 * 电影 item
 */

 'use strict';


 import React, {
   Component,
   PropTypes
  } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Util from '../../utils/Util.js';

export default class MovieItem extends Component {

  // 声明属性的类型
  static propTypes = {
    movieData: PropTypes.object.isRequired,
    viewDetail: PropTypes.func,
  };

  render() {
    // 演员
    var casts = [];
    for (var i in this.props.movieData.casts) {
      casts.push(this.props.movieData.casts[i].name + ' ');
    }

    // 标签
    var genres = [];
    for (var i in this.props.movieData.genres) {
      genres.push(this.props.movieData.genres[i] + ' ');
    }

    return (
      <View style={styles.container}>
        {/*封面*/}
        <View>
          <Image style={styles.movieCover} source={{uri: this.props.movieData.images.medium}} />
        </View>
        {/*文字内容*/}
        <View>
          <Text style={styles.text} numberOfLines={1}>
            <Text style={styles.textBold}>名称：</Text>
            {this.props.movieData.title}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            <Text style={styles.textBold}>演员：</Text>
            {casts}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            <Text style={styles.textBold}>评分：</Text>
            {this._stars(this.props.movieData.rating.average)}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            <Text style={styles.textBold}>时间：</Text>
            {this.props.movieData.year}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            <Text style={styles.textBold}>标签：</Text>
            {genres}
          </Text>
          {/*查看详情按钮*/}
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
    flexDirection: 'row',
    marginTop: 10,
    height: 150,
    paddingTop: 15,
    paddingLeft: 10,
    borderBottomWidth: Util.onePixel,
    borderTopWidth: Util.onePixel,
    borderColor: '#ddd',
  },

  movieCover: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },

  text: {
    width: 200,
    marginLeft: 10,
  },

  textBold: {
    fontWeight: 'bold',
  },

  viewDetailButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 80,
    borderWidth: Util.onePixel,
    borderColor: '#3C9BFD',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 3,
  }

});
