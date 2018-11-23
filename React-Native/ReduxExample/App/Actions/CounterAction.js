import { connect } from 'react-redux';

import * as Actions from './ActionTypes';
import CounterComponent from '../Components/CounterComponent';


// 将 Redux 状态和组件对应的属性（这里是 count 属性）进行绑定
const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
});


// 将 Redux 事件和组件对应的属性进行绑定
// 每个 action 都必须要有一个 type 属性 
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({
        type: Actions.COUNTER_INCREMENT,
    }),
    decrement: () => dispatch({
        type: Actions.COUNTER_DECREMENT,
    }),
    updateToNewCount: (value) => dispatch({
        type: Actions.COUNTER_JUMP_TO_VALUE,
        data: value
    }),
});



// connect 方法将属性和 UI 组件关联起来
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);