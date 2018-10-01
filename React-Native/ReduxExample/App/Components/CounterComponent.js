/*
 * 计数器 UI 组件
 * 组件的方法和属性在 CounterAction 里面绑定了对应的状态
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class CounterApp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                <Text>{this.props.count}</Text>

                <Button
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});