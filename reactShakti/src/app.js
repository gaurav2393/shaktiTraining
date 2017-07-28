import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';

export class MyButton extends React.Component{
    constructor(props) {
        super(props);
        this.MyText1='Button1';
        this.MyText2='Button2';
        this.MyText3='Button3';        
    }
    onButtonClick(){
        this.MyText = 'Value Changed';
        console.log(`Button ${this.text} Clicked`);
    }

    render(){        
        return(
            <div>
                <Button1 onButtonClick={this.onButtonClick} MyText={this.MyText1}>
                </Button1>
                <Button1 onButtonClick={this.onButtonClick} MyText={this.MyText2}>
                </Button1>
                <Button1 onButtonClick={this.onButtonClick} MyText={this.MyText3}>
                </Button1>
                <Link to={`${this.props.match.url}/ad`}> Sub Topic</Link>
            </div>
        )
    }
}
MyButton.defaultProps={
    MyText:'This is Default'
}

class Button1 extends React.Component{
    constructor(props) {
        super(props);        
        this.text = props.MyText;
        this.clickHandler = props.onButtonClick.bind(this);
    }
    render() {
        return <input type="button" value={this.text} onClick={this.clickHandler}/>
    }
}
