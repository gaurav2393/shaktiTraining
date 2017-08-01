import React from 'react';
import ReactDOM from 'react-dom';
import {MyButton} from './app.js';
import TextBox from './textBox.js';
import Data from './data.js';
import List from './statelessComponent.js';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.js';
import HomeContent from './homeContent.js';

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div>
                    <img src='' />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to="/textbox">Text Box</Link></li>
                    </ul>
                </nav>                
            </header>
            <main>
                <Route path = "/home" component={Home} />
                <Route path = "/about" component={About} />
                <Route path = "/topics" component={Topics} />
                {/*<Route path = "/about" component={Home} />
                 <Route path = "/topics" component={Home} />
                 <Route path = "/home" component={Home} />*/}
                {/*<Route exact path="/" component={MyButton}/>
                <Route exact path="/textbox" component={TextBox}/>
                <Route path="/about" component={(props)=> {                    
                    return <Data match={props.match} propArray={['1','2','3']} propBool={true} propNumber={40} />
                }}/>
                <Route path="/topics" component={()=> {
                    return <List items={['dgd','sdgs','sfvsdg ']}/>
                }}/>*/}
            </main>
            {/*<div>
                <h1> hello world </h1>
                {<MyButton></MyButton>
                <TextBox text="Hi There"></TextBox>}
                <Data propArray={['1','2','3']} propBool={true} propNumber={40}/>
                <List items={['dgd','sdgs','sfvsdg ']}/>
            </div>*/}
        </div>
    </Router>, document.getElementById('container')
    
);