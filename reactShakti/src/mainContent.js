import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import HomeContent from './homeContent.js';
// import HomeContent2 from './homeContent2';

class MainContent extends React.Component{
    constructor(props) {
        super(props);        
    }
    componentWillMount() {
        console.log('Will mount');
    }
    componentDidMount() {
        console.log('Did Mount');
    }
    componentWillReceiveProps(newProps) {
        console.log('will receive props')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('should update');
        return true;
    }
    componentWillUpdate(newProps, nextState) {
        console.log('will update');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('did update');
    }
    render() {
        console.log(this.props.url);
        return(
            <div>
                <Route path={`${this.props.match.url}/:name`} component={({match})=> {return match.params.name}}/>                
                {/*<Route path="/home/h" component={HomeContent} />*/}
            </div>
        )        
    }
}

export default MainContent;