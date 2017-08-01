import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import HomeContent from './homeContent.js';
// import HomeContent2 from './homeContent2';

class BodyContent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return(
            <span>{this.props.match.params.name}</span>
        )
    }
}

class MainContent extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.url);
        return(
            <div>
                {/*<Route path={`${this.props.match.url}/:name`} component={
                    ({match}) => {return match.params.name}}/>*/}
                <Route path={`${this.props.match.url}/:name`} component={BodyContent}/>
                {/*<Route path="/home/h" component={HomeContent} />*/}
            </div>
        )
    }
}

export default MainContent;