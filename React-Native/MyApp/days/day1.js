
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Text,
    TouchableHighlight,
    ListView
} from 'react-native';
import PropTypes from 'prop-types';

import Util from '../utils/util';

export default class Day1 extends Component {
    render () {
        return (
            <View style={styles.containerView}>
                <TimeView totalTime={'00:08.53'} sectionTime={'00:01.34'}></TimeView>
                <Panel onPressLeftButton={()=>{

                }} onPressRightButton={()=> {

                }}></Panel>
                <RecordList></RecordList>
            </View>
        );
    }
}

// 时间展示
class TimeView extends Component {

    static propTypes = {
        totalTime : PropTypes.string.isRequired,
        sectionTime : PropTypes.string.isRequired,
    };

    render() {
        return (
            <View style={timeViewStyles.timeView}>
                <Text style={timeViewStyles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={timeViewStyles.totalTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
}

// 操作面板
class Panel extends Component {

    render() {
        return (
            <View style={panelStyles.panel}>
                    <TouchableHighlight style={[panelStyles.button, panelStyles.leftButton]} underlayColor='#f4f4f4'>
                        <Text>计次</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[panelStyles.button, panelStyles.rightButton]} underlayColor='#f4f4f4'>
                        <Text>启动</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

// 时间记录
class RecordList extends Component {

    render() {
        return (
            <View style={listStyles.list}></View>
            // <ListView style={listStyles.list}></ListView>
        );
    }
}


//--------------------- 样式 ------------------------

const styles = StyleSheet.create({
    containerView: {
        top: 64,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
    },

    

    
});

const timeViewStyles = StyleSheet.create({

    timeView: {
        // backgroundColor: 'red',
        marginTop: 16,
        height : 85,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    sectionTime: {
        fontSize: 20,
        fontWeight: '100',
        color: '#555',
        alignSelf: 'flex-end',
    },

    totalTime: {
        fontSize: Util.windowSize.width > 375 ? 70 : 60,
        fontWeight: '100',
        color: '#222',
        bottom: 0,
    },
});

const panelStyles = StyleSheet.create({

    panel: {
        backgroundColor: '#f3f3f3',
        height: 150,
        width: '100%'
    },

    button: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 35,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    },

    leftButton: {
        position: 'absolute',
        top: 30,
        left: 55,
    },

    rightButton: {
        position: 'absolute',
        top: 30,
        right: 55,
    },
});

const listStyles = StyleSheet.create({
    list: {
        backgroundColor: 'cyan',
        borderTopColor: '#fff',
        borderTopWidth: 1,
    }

});