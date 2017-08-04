import React from 'react';

const AddList = (props) => {
    console.log(props);
    return (
        <select onChange={props.handleSelectChange}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
        </select>
    )
}

export default AddList;