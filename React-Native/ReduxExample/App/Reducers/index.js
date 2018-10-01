/*
 * 使用唯一的容器来管理状态
 */


import { combineReducers, createStore } from 'redux';

import counterReducer from './CounterReducer';

const AppReducers = combineReducers({
    counterReducer,
});

// 将多个 reducer 合并起来成一个 rootReducer，方便统一管理状态
const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

// 创建唯一的 store
let store = createStore(rootReducer);

export default store;