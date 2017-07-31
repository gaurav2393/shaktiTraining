import React from 'react';

class ModifyTest extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <input type="number" min="0" value={this.props.counter} onChange={this.props.handleChange} ref="test"/>
                <input type="button" onClick={this.props.increase} value="+"/>
                <input type="button" onClick={this.props.decrease} value="-"/>
                {/*<input type="number" min="0" value={this.props.numberOfTest} onChange={this.props.handleChange} ref="test"/>
                <input type="button" onClick={this.props.incrementTest} value="+"/>
                <input type="button" onClick={this.props.decrementTest} value="-"/>*/}
            </div>
        )
    }
}
export default ModifyTest;