import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './subMenu.js';
import MainContent from './mainContent.js';

class Home extends React.Component{
    constructor(props) {
        super(props);        
    }
    render() {
        return(
            <section>
                <div>                  
                    <SubMenu match={this.props.match} items={this.subMenu} />
                </div>
                <div>                    
                </div>
            </section>
        )
    }
}

export default Home;