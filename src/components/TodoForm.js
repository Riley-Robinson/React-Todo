import React from 'react';

class ToDoForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            todoItem:'',
        };
    }

    handleChange = e => {
        this.setState(
            {
                todoItem:e.target.value
            });
    };

    handleAddItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemName);
    };

    render() {
        return (
            <form onSubmit={this.handleAddItem}>
                <input
                    onchange={this.handleChange}
                    type='text'
                    name='item'
                    value={this.state.todoItem}
                    defaultValue='Reset'
                />
                <button> Add Todo </button>
            </form>
        );
    }
}

export default ToDoForm;