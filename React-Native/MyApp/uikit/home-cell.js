import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';

// 3rd party
import Icon from 'react-native-vector-icons/Ionicons';

/*
首页 cell，文字 + icon 的样式 
 */
export default class HomeCell extends Component {


    constructor() {
        super();
    }
    
    render() {

        return (
            <TouchableOpacity 
                style={styles.containerView} 
                underlayColor="#eee" 
                onPress={this.props.onPress}
                >
                    <Icon style={[styles.icon, {color: this.props.iconInfo.color}]} 
                        size={this.props.iconInfo.size} 
                        name={this.props.iconInfo.icon}
                        ></Icon>
                    <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchableHighlight: {
        flex: 1,
    },

    containerView: {
        // backgroundColor: "red",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 17,
        textAlign: "center",
        position: "absolute",
        bottom: 15,
        width: "100%",
    },

    icon: {
        width: 50,
        height: 50,
        // backgroundColor: "red",
        textAlign: "center",
        position: "relative",
        top: -10
    },
});