import React from 'react';
import { connect } from 'react-redux';
import { setTodoData, setAddTodo } from '../actions/actions.js';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';
import AddList from '../components/addList.js';

class AddToList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleTodoData = this.handleTodoData.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleTodoData(event) {
        this.props.handleTodoData(event.target.value);
    }
    handleAddTodo() {
        this.props.handleAddTodo(this.props.state.addData);
    }
    render() {        
        return (
            <AddList state={this.props.state} handleTodoData={this.handleTodoData} handleAddTodo={this.handleAddTodo} />
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoData: (value) => {
            dispatch(setTodoData(value));
        },
        handleAddTodo: (data) => {
            dispatch(setAddTodo(data));
        }
    }
}

// AddToList.propTypes = {
//     dispatch: func.isRequired,
//     addData: string.isRequired,
//     totalTodos: number.isRequired,
//     todos: arrayOf(shape({
//         name: string,
//         completed: bool,
//     })),
// };
export default connect(mapStateToProps, mapDispatchToProps)(AddToList);
