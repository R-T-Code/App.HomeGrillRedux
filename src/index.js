import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './sass/index.scss';

import menuReducer from './reducers/menuReducer';
import tablesReducer from './reducers/tablesReducer';
import ordersReducer from './reducers/ordersReducer';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    menu: menuReducer,
    tables: tablesReducer,
    orders: ordersReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
