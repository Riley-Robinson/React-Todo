import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.TodoList.map(item => (
                <Todo
                key = {item.id}
                item = {item}
                toggleDone = {props.toggleDone}
                />
            ))}

                <button onClick={props.clearCompleted}>Done with the stuff</button>

        </div>
    );
};

export default TodoList;