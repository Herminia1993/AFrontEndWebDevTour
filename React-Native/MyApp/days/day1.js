
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Text,
    TouchableHighlight,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';

import Util from '../utils/util';

export default class Day1 extends Component {

    constructor(props) {
        super(props);

        this.totalTimeInMs = 0;
        this.totalTimeUtilLastSection = 0;
        this.isTimerRunning = false;
        this.items = [];
        this.state = {
            totalTime: '00:00.00',
            sectionTime: '00:00.00',
            leftButtonTitle: "计次",
            rightButtonTitle: "启动",
            timeItems: this.items,
        };
    }

    _formatTimeToString(time) {
        if (time < 100) {
            return '00:00.' + Util.formatNumWithFixedDigit(time, 2);
        } else if (time < 100 * 60) {
            return '00:' + Util.formatNumWithFixedDigit(parseInt(time / 100), 2) + '.' + Util.formatNumWithFixedDigit(time % 100, 2);
        } else {
            return '00:00.00';
        }
    }

    _startTimer() {
        if (this.isTimerRunning == false) {
            return;
        }

        setTimeout(()=>{
            this._startTimer();
        }, 10);

        this.totalTimeInMs++;
        // this.totalTimeInMs = 238;
        this.totalTimeUtilLastSection++;

        this.setState({
            totalTime: this._formatTimeToString(this.totalTimeInMs),
            sectionTime: this._formatTimeToString(this.totalTimeUtilLastSection),
        });
    }

    // 启动/暂停
    _resumeOrPause() {
        this.isTimerRunning = !this.isTimerRunning;
        this._startTimer();
        this.setState({
            leftButtonTitle: this.isTimerRunning ? '计次' : '复位',
            rightButtonTitle: this.isTimerRunning ? '停止' : '启动',
        });
    }

    // 计次/复位
    _recordOrReset() {

        console.log(this.isTimerRunning, this.state.leftButtonTitle);
        if (this.isTimerRunning == false) { // 复位
            this.totalTimeInMs = 0;
            this.totalTimeUtilLastSection = 0;

            this.setState({
                totalTime: this._formatTimeToString(this.totalTimeInMs),
                sectionTime: this._formatTimeToString(this.totalTimeUtilLastSection),
                leftButtonTitle:  '计次',
            });
        } else {

            let index = this.items.length + 1;
            let item = {key: String(index), title: '计次' + index, time: this._formatTimeToString(this.totalTimeUtilLastSection)};
            this.items.splice(0, 0, item);
            this.setState({
                timeItems: this.items,
            });

            this.totalTimeUtilLastSection = 0;
        }
        
    }


    render () {
        return (
            <View style={styles.containerView}>
                <TimeView 
                    totalTime={this.state.totalTime} 
                    sectionTime={this.state.sectionTime}></TimeView>
                <Panel
                    leftButtonTitle={this.state.leftButtonTitle} 
                    rightButtonTitle={this.state.rightButtonTitle}
                    onPressLeftButton={()=>{
                        this._recordOrReset();
                    }} onPressRightButton={()=> {
                        this._resumeOrPause();
                    }}></Panel>
                <RecordList items={this.state.timeItems}></RecordList>
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
                    <TouchableHighlight 
                        style={[panelStyles.button, panelStyles.leftButton]} 
                        underlayColor='#f4f4f4'
                        onPress={this.props.onPressLeftButton}>
                        <Text>{this.props.leftButtonTitle}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={[panelStyles.button, panelStyles.rightButton]} 
                        underlayColor='#f4f4f4'
                        onPress={this.props.onPressRightButton}>
                        <Text>{this.props.rightButtonTitle}</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

// 时间记录
class RecordList extends Component {


    _renderItem({item}) {
        return (
            <View 
                style={{height: 30,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                        }}
            >
                <View style={{flex: 1, 
                             width: '100%',
                             flexDirection: 'row', 
                             justifyContent: 'space-between', 
                             alignItems: 'center'}}
                >
                    <Text style={{marginLeft: 30, textAlign: 'left'}}>{item.title}</Text>
                    <Text style={{marginRight: 30, textAlign: 'right'}}>{item.time}</Text>
                </View>
                <View style={{backgroundColor: '#ccc', width: Util.windowSize.width - 10, height: Util.onePixel, marginLeft: 10}}></View>
            </View>
        );
    }

    render() {
        return (

            <FlatList 
            style={listStyles.list}
            automaticallyAdjustContentInsets={false}
            data={this.props.items}
            extraData= {this.props}
            renderItem={this._renderItem}
            />

        );
    }
}


//--------------------- 样式 ------------------------

const styles = StyleSheet.create({
    containerView: {
        marginTop: 64,
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
        marginTop: 50,
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
        backgroundColor: '#f3f3f3',
        borderTopColor: '#ccc',
        borderTopWidth: Util.onePixel,
        width: '100%',
    },

    item: {

    },

});