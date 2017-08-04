import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import myReducers from './reducers/stateReducer.js';
import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {logger} from './middleware/middleware.js';
import AddToList from './containers/addToListContainer.js';
import ListItems from './containers/listItemsContainer.js';
import SelectContainer from './containers/selectContainer.js';

const reducers = combineReducers({
    state: myReducers
});
const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AddToList />
            <SelectContainer />
            <ListItems />
        </div>
    </Provider>, document.getElementById('container')    
);