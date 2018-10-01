/*
 * 负责接收事件，更新状态
 */


import * as Actions from '../Actions/ActionTypes'

const counterReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case Actions.COUNTER_DECREMENT:
            return Object.assign({}, state, {
               count: state.count - 1
            });
        default:
            return state;
    }
};

export default counterReducer;