import React from 'react';
import propTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';
import {MyButton} from './app.js';

class Data extends React.Component {
    render() {        
        return (
            <div>
                <h3>{this.props.propArray}</h3>
                <p>{this.props.propBool ? 'true' : 'false'}</p>
                <p>{this.props.propNumber}</p>
                <Link to={`${this.props.match.url}/rendering`}> Sub Topic</Link>
                {/*<p>{this.props.propFunc(3)}</p>
                <p>{this.props.propNumber}</p>
                <p>{this.props.propString}</p>
                <p>{this.props.propObject}</p>*/}
                <p></p>
                <Route exact path={`${this.props.match.url}/:topic`} component={Topic}/>
            </div>
        )
    };
}

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topic}</h3>
    </div>
)

// Data.propTypes = {
//     propArray: propTypes.array.isRequired,
//     propBool: propTypes.bool.isRequired,
//     propNumber: propTypes.number
// }
export default Data;