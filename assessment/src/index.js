import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.js';
import AboutUs from './aboutUs.js';
import ContactUs from './contactUs.js';
import myReducers from './reducers/stateReducer.js';
import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {logger} from './middleware/middleware.js';

const reducers = combineReducers({
    state: myReducers
});
const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Home />
            <AboutUs />
        </div>
        {/*<Router>
            <div>
                <header>
                    <div>
                        <img src='/saxoLogo.png' alt="logo"/>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>                        
                        </ul>
                    </nav>                
                </header>
                <div>
                    <Route exact path = "/" component={Home} />
                    <Route path = "/home" component={Home} />
                    <Route path = "/aboutus" component={AboutUs} />
                    <Route path = "/contactus" component={ContactUs} />
                </div>
            </div>
        </Router>*/}
    </Provider>, document.getElementById('container')    
);