import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/toDoList.js';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';
import _ from 'lodash';
import { setStrikeOff, setDeleteTodo } from '../actions/actions.js';

class ListItems extends React.PureComponent {
    constructor(props){
        super(props);
        this.handleStrikeOff = this.handleStrikeOff.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);        
    }
    handleDeleteTodo(value, index) {
        this.props.handleDeleteTodo(value, index);
    }
    handleStrikeOff(value, index) {
        this.props.handleStrikeOff(value, index);
    }
    render() {
        return (
            <div className="list-items">
                <span className="total-todos">
                    Total Tasks: {this.props.state.totalTodos}
                </span>
                <ul id="to_do_list" className="to-do-list">
                    {_.map(this.props.state.todos, (todoItem, index) => {
                            if(this.props.state.dropDownValue==='completed' && !todoItem.completed) {
                                return false;
                            } else if(this.props.state.dropDownValue==='active' && todoItem.completed) {
                                return false;
                            }
                            return <TodoList todoItem={todoItem} key={index} index={index} handleDeleteTodo={this.handleDeleteTodo} handleStrikeOff={this.handleStrikeOff}/>
                        }
                    )}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        handleDeleteTodo: (value, index) => {
            dispatch(setDeleteTodo(value, index));
        },
        handleStrikeOff: (value, index) => {
            dispatch(setStrikeOff(value, index));
        }
    }
}

// ListItems.propTypes = {
//     dispatch: func.isRequired,
//     addData: string.isRequired,
//     totalTodos: number.isRequired,
//     todos: arrayOf(shape({
//         name: string,
//         completed: bool,
//     })),
// };

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
