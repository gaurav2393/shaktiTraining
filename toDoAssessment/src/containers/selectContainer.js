import React from 'react';
import { connect } from 'react-redux';
import { setSelectData } from '../actions/actions.js';
import { number, func, string, arrayOf, shape, bool } from 'prop-types';
import Select from '../components/select.js';

class SelectContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    handleSelectChange(event){
        this.props.handleSelectChange(event.target.value);
    }
    render() {        
        return (
            <Select state={this.props.state} handleSelectChange={this.handleSelectChange} />
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectChange: (value) => {
            dispatch(setSelectData(value));
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
