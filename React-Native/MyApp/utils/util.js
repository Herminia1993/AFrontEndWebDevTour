
import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  onePixel: 1 / PixelRatio.get(),
  windowSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  formatNumWithFixedDigit(num, length) {
    return (Array(length).join('0') + num).slice(-length);
  },
}




export default Util;