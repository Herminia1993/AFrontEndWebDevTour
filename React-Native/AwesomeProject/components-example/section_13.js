// Modal


'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import Util from './utils';


export default class ModalExample extends Component {

    constructor() {
      super();
  
      this.state = {
        isModalVisible: false,
      }
    }
  
    render() {
      return (
        <View style={{marginTop: 22}}>
            <TouchableHighlight
                style={{marginTop: 100, alignSelf: 'center', backgroundColor: 'green'}}
                onPress={() => {
                    this._setModalVisible(true);
                }}
            >
                <Text>Show Modal</Text>
            </TouchableHighlight>

            <ModalView 
                isVisible={this.state.isModalVisible}
                onRequestClose={()=>{
                    this._setModalVisible(false);
                }} 
            ></ModalView>
      </View>
      );
    }

    _setModalVisible(isVisible) {
        this.setState({
            isModalVisible: isVisible,
        });
    }
}

// 底部弹出的浮层
// 背景是半透明的，底部是不透明的内容区域
class ModalView extends Component {


    render() {

        return (
        <View>
            <Modal 
            animationType={'fade'}
            transparent
            visible={this.props.isVisible}
            onRequestClose={() => {
                
            }}
            >
                <TouchableWithoutFeedback
                    onPress={() => this.props.onRequestClose()}
                >
                    <View style={styles.modalView}>
                        <View style={styles.floatBgView}>
                            <View style={styles.floatTitleView}>
                                <Text style={styles.floatTitle}>弹窗</Text>
                                <Text style={styles.closebtnText} includeFontPadding={false} accessibilityLabel={'t_closeLayer2'}>
                                    X
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row',
                                    marginLeft: 15, 
                                    width: (Util.windowSize.width - 30)}}>
                                <Text style={[styles.floatItemDesc, { marginRight: (15) }]}>这是一个 Modal 弹窗</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View> 
        )
    }


}

  

const styles = StyleSheet.create({
    modalView: {
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      overflow: 'hidden'
    },

    //浮层背景
  floatBgView: {
    backgroundColor: '#ffffff',
    height: (250),
    width: Util.windowSize.width,
    marginTop: (Util.windowSize.height - (250)),
    overflow: 'hidden',

  }, 

  //浮层TitleView
  floatTitleView: {
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flexDirection: 'row',
    height: (46),
  },

  floatTitle: {
      color: '#333333',
      marginLeft: (15),
      marginRight: (15),
      fontSize: (16),
      alignSelf: 'center',
  },

  closebtnText: {
    textAlign: 'center',
    color: '#666',
    marginTop: (15),
    fontSize: (10),
    marginRight: (15),
    fontWeight: 'normal',
  },
    
  content: {
      fontSize: (14),
      color: '#666666',
      marginRight: (15),
      alignSelf: 'center',
      lineHeight: (18),
  },

  tag: {
    color: '#ff6913',
    fontSize: (11),
  },

  tagTitle: {
    color: '#333333',
    fontSize: (13),
    marginLeft: (10),
  },

  floatItemDesc: {
    color: '#666666',
    fontSize: (13),
    marginTop: (5),
  },

  tagView: {
    flexDirection: 'row',
    width: Util.windowSize.width,
    alignItems: 'center',
    marginLeft: (15),
    marginRight: (15),
    backgroundColor: '#ffffff',
  },
  
  floatItemView: {
    marginTop: (15),
    backgroundColor: '#ffffff'
  }
});
