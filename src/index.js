import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';
 
//import * as actions from './actions';

const store = createStore(reducers);
/*
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));  //스토어의 현재 상태가 변경될때마다 로그에 보여준다.
store.dispatch(actions.increment()); //엑션을 실행하여 스토어 변경을 일으켜본다.
store.dispatch(actions.increment()); //엑션을 실행하여 스토어 변경을 일으켜본다.
store.dispatch(actions.decrement()); //엑션을 실행하여 스토어 변경을 일으켜본다.
store.dispatch(actions.setColor([200,200,200])); //엑션을 실행하여 스토어 변경을 일으켜본다.

unsubscribe();  //스토어 변경을 보여주지 않도록 반환값 실행 (반환값은 실행 중지 할수 있는 함수를 리턴)

store.dispatch(actions.setColor([210,210,210]));  //엑션을 실행하여 스토어 변경이 일어나지만 내용을 더이상 보여주지는 않도록 설정
*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
