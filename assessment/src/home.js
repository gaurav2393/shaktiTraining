import React from 'react';
import { Route, Link } from 'react-router-dom';
import ModifyTest from './modifyTest.js';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './Actions/actions.js';

class Home extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     numberOfTest: 0
        // };
        // this.decrementTest = this.decrementTest.bind(this);
        // this.incrementTest = this.incrementTest.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    // handleChange(event) {
    //     this.setState({numberOfTest: parseInt(event.target.value)});
    // }
    // decrementTest() {
    //     this.setState({
    //         numberOfTest: this.state.numberOfTest-1
    //     })
    // }
    // incrementTest() {
    //     this.setState({
    //         numberOfTest: this.state.numberOfTest+1
    //     })
    // }
    handleChange(event) {
        
    }
    // increase() {
    //     this.props.dispatch(actions.incrementFunction());
    // }
    decrease() {
        this.props.dispatch(actions.decrementFunction());
    }
    render() {
        return(
            <main className="home">
                <div>
                    <p>ModifyTest</p>
                    {/*<Link to={`/home/modifyTest`}>Modify Tests</Link>*/}
                </div>
                <div>
                    <ModifyTest increase={this.props.increase} decrease={this.decrease} handleChange={this.handleChange} counter={this.props.counter}/>
                    {/*<ModifyTest handleChange={this.handleChange} decrementTest={this.decrementTest} incrementTest={this.incrementTest} numberOfTest={this.state.numberOfTest}/>*/}
                    {/*<Route path="/home/modifyTest" component={()=> {
                        return <ModifyTest handleChange={this.handleChange} decrementTest={this.decrementTest} incrementTest={this.incrementTest} numberOfTest={this.state.numberOfTest}/>
                    }}/>*/}
                </div>
            </main>
        )
    }
};
function mapStateToProps(state){
    return {
        counter: state.state.counter
    }
};
function mapDispatchToProps(dispatch){
    return {
        increase: ()=>{
            dispatch(actions.incrementFunction())
        },
        decrease: ()=>{
            dispatch(actions.decrementFunction())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);