import React from 'react';  

const Item = props => {
    return (
        <div className={`item${props.item.complete ? 'complete' : ''} `}
        onClick={e => props.toggleDone(props.item.id)}
        >

            <p>{props.item.task}</p>

        </div>
    );
};

export default Item;