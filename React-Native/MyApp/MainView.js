import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

// modules
import Util from './utils/util'
import HomeCell from './uikit/home-cell'
import Day1 from './days/day1'


export default class MainView extends Component {

    constructor() {
        super();

        this.state = {
            days: [
                {
                    key:0,
                    title:"A stopwatch",
                    component: Day1,
                    isFA: false,
                    icon: "ios-stopwatch",
                    size: 48,
                    color: "#ff856c",
                    hideNav: false,
                  },{
                    key:1,
                    title:"A weather app",
                    component: Day1,
                    isFA: false,
                    icon: "ios-partly-sunny",
                    size:60,
                    color:"#90bdc1",
                    hideNav: true,
                  },
                ],

        };
    }

    
    // 最外层用 View 组件作为容器，里面再用 grid 的布局装 TouchableHighlight 组件
    // 上、左、右的边线由 container 来显示，第一、二列 cell 负责显示底、右的边线，
    // 最后一列 cell 显示底、右的边线
    render() {
        let actualThis = this;
        var cells = this.state.days.map(function(element, index) {
            return (
                <View 
                style={[styles.cell, 
                    index % 3 == 2 ? styles.cellSeparatorBottomLeft :styles.cellSeparatorBottomRight]}
                key={element.key}
                >
                    <HomeCell
                        title={'Day' + (index+1)}
                        iconInfo={element}
                        onPress={()=>{
                            // 这里的 this 实际上是一个 DedicatedWorkerGlobalScope 对象，而不是 MainView
                            // 所以我们需要用 this 别名的方式来指向 MyView
                            actualThis._jumpToDay(index);
                        }}>
                        
                    </HomeCell>
                </View>
            );
        });


        return (
            <ScrollView 
            alwaysBounceVertical={true}
            style={styles.scrollView} >
                <View style={styles.gridView}>
                    {cells}
                </View>
            </ScrollView>
        );
      }


      componentDidMount() {
        
        setTimeout(()=>{
            this._jumpToDay(0);
        }, 1000);
      }

      // 跳转到具体某一天
      _jumpToDay(index) {
        let selectedDay = this.state.days[index];
        let route = {
            title: selectedDay.title,
            index: index + 1,
            display: selectedDay.hideNav,
            component: selectedDay.component,
        }; 
        this.props.navigator.push(route);
      }
      
}


// 样式
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#f4f4f4',
    },
    
    gridView: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        flexWrap: "wrap",
        width: Util.windowSize.width,
        // height: '100%',
        borderWidth: Util.onePixel,
        borderColor:"#ccc",
        backgroundColor: "white",
      },

    cell: {
        width: Util.windowSize.width / 3.0,
        height: Util.windowSize.width / 3.0,
      },

    cellSeparatorBottomLeft: {
        borderBottomWidth: Util.onePixel,
        borderBottomColor:"#ccc",
        borderLeftWidth: Util.onePixel,
        borderLeftColor:"#ccc",
    },

    cellSeparatorBottomRight: {
        borderBottomWidth: Util.onePixel,
        borderBottomColor:"#ccc",
        borderRightWidth: Util.onePixel,
        borderRightColor:"#ccc",
    },

  });