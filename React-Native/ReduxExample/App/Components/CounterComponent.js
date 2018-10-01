/*
 * 计数器 UI 组件
 * 组件的方法和属性在 CounterAction 里面绑定了对应的状态
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

export default class CounterApp extends Component {

    constructor(props) {
        super(props);

        this.inputValue = null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType={'number-pad'}
                        onChangeText={(text) => {
                            this.inputValue = text;
                        }}
                    />
                    <Button
                        onPress={()=>this.props.updateToNewCount(this.inputValue)}
                        title="OK"
                        color="#841584"
                        accessibilityLabel="Update to new count"
                    />
                </View>
                <View style={styles.counterContainer}>
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

    inputContainer: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    textInput: { 
        width: 200, 
        height: 30, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 6 
    },

    counterContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
});