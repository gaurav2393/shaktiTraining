import React from 'react';
import ReactDOM from 'react-dom';

class TextBox extends React.Component{
    constructor(){
        super();        
        this.state={
            text: 'initial'
        }
    }
    handleChange(event){
        this.setState({
            text: 'changing'
        });
        ReactDOM.findDOMNode(this.refs.name).focus();
    }
    render() {
        return <TextBox1 text={this.state.text} handleChange={this.handleChange}/>
    }
}
export default TextBox;

class TextBox1 extends React.Component{
    constructor(props) {
        super(props);
        console.log('constructor');
        this.text= props.text;
        this.state = {
            text: props.text
        }
        this.handleChange = this.props.handleChange.bind(this);
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
    render(){
        return <input value={this.state.text} onChange={this.handleChange} ref="name"/>
    }
}