import React from 'react';
import ReactDOM from 'react-dom';
import SubMenu from './subMenu.js';
import MainContent from './mainContent.js';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.subMenu = ['HomeContent', 'HomeSubMenu2', 'HomeSubMenu3', 'HomeSubMenu4'];
        this.state={
            url: 'initial'
        }
    }

    render() {
        return(
            <section>
                <div>
                    {/*<ul>
                        {this.subMenu.map(item => <ListItem match={this.props.match} key={item.toString()} value={item} />)}
                    </ul>*/}
                    <SubMenu match={this.props.match} items={this.subMenu}/>
                </div>
                <div>
                    <MainContent match={this.props.match}/>
                </div>
            </section>
        )
    }
}

export default Home;