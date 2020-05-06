import React from "react" 

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: ""
    };
  }

  handleChanges = e => {

    this.setState({ itemName: e.target.value });
  };

  // class property to submit form
  handleAddItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
  };

  render() {
   
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
          type="          "
          defaultValue="Reset"
        />
        <button className = "blockoftext">Add</button>
      </form>
    );
  }
}



export default TodoForm; 