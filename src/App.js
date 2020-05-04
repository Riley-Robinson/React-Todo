import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import './components/Todo.css';

const dataTodo = 
[
  {

    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
    constructor(){
      super();
      this.state = {
        dataTodo: dataTodo
      };
    }

    toggleItem = itemId => {
        this.setState({
          dataTodo: this.state.dataTodo.map(item => {
            if(item.id === itemId){
              return{
                ...item,
                completed: !item.complete
              };
            }

            return item;
          })
        });
    };
    
    addTask = itemToDo => {
      this.setState({

      dataTodo: [
        ...this.state.dataTodo,
        {
          task: itemToDo,
          completed: false,
          id: Date.now()
        }
      ]
    });
    };
   
    clearCompleted = () => {
      this.setState({
        dataTodo: this.state.dataTodo.filter(item => {
          return !item.completed;
        })
      });
    };
  
  render() {
    console.log('date.now', Date.now())
    return (

      <div className='App'>
        <div className="header">

            <h1> To Do List </h1>
            <ToDoForm addTask = {this.addTask} />
        </div>

            <TodoList 
            TodoList={this.state.dataTodo}
            toggleItem = {this.toggleItem}
            clearCompleted = {this.clearCompleted}
             />

      </div>
    );
  }
}

export default App;
