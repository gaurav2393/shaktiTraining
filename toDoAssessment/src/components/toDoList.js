import React from 'react';
const ToDoList = (props) => {
    return (
        <li className={props.todoItem.completed ? 'completed' : ''}>            
            <span className="todo-name">
                {props.todoItem.name}
            </span>
            <input type="checkbox" onChange={()=>props.handleStrikeOff(props.todoItem.name, props.index)} />
            <span onClick={props.handleDeleteTodo} className="close">
                &#10006;
            </span>
        </li>
    )
}

export default ToDoList;


/*import React from 'react';
import { connect } from 'react-redux';
import { setStrikeOff, setDeleteTodo } from '../actions/actions.js';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';

class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleStrikeOff = this.handleStrikeOff.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }
    handleStrikeOff() {
        this.props.dispatch(setStrikeOff(this.props.todoItem.name, this.props.index));
    }
    handleDeleteTodo() {
        this.props.dispatch(setDeleteTodo(this.props.todoItem.name, this.props.state.index));
    }
    render() {        
        return (
            <li className={this.props.todoItem.completed ? 'completed' : ''}>
                <span className="todo-name" onClick={this.handleStrikeOff}>
                    {this.props.todoItem.name}
                </span>
                <span onClick={this.handleDeleteTodo} className="close">
                    &#10006;
                </span>
            </li>
        );
    }
}

const mapStateToProps = (state) => state;

// TodoList.propTypes = {
//     dispatch: func.isRequired,
//     // addData: string.isRequired,
//     totalTodos: number.isRequired,
//     todos: arrayOf(shape({
//         name: string,
//         completed: bool,
//     })),
//     todoItem: shape({
//         name: string,
//         completed: bool,
//     }),
//     index: number,
// };

export default connect(mapStateToProps)(TodoList);*/
