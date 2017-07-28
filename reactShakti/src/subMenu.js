import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

class ListItem extends React.Component{
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <li><Link to={`${this.props.match.url}/${this.props.value}`}>{this.props.value}</Link></li>
        )
    }
}
    

class SubMenu extends React.Component{
    constructor(props) {
        super(props);        
    }
    render() {        
        return(
            <ul>
                {this.props.items.map(item => <ListItem match={this.props.match} key={item.toString()} value={item}/>)}
            </ul>
        )        
    }
}

export default SubMenu;