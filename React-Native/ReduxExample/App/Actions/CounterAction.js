import { connect } from 'react-redux';

import * as Actions from './ActionTypes';
import CounterComponent from '../Components/CounterComponent';


// 将状态和 UI 组件对应的属性（这里是 count 属性）进行绑定
const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
});


// 将事件分发和 UI 组件对应的属性进行绑定
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
});

//========================================//
//           Counter Action               //
//    每个 action 都必须要有一个 type 属性    //
//========================================//

// 计数器 +1 的动作
export const counterIncrement = () => ({
    type: Actions.COUNTER_INCREMENT,
});

// 计数器 -1 的动作
export const counterDecrement = () => ({
    type: Actions.COUNTER_DECREMENT,
});


// connect 方法将属性和 UI 组件关联起来
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);