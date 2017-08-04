import React from 'react';

const AddList = (props) => {
    return (
        <div className="add-to-list">
            <label htmlFor="to_do_input">
                Add To Do List
            </label>
            <input id="to_do_input" type="text" value={props.state.addData} onChange={props.handleTodoData}/>
            <input id="add_list_item" type="button" onClick={props.handleAddTodo} value="Add"/>
        </div>
    )
}

export default AddList;