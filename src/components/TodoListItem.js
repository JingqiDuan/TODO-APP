import React from 'react';
import {Link} from 'react-router-dom';


const TodoListItem = ({id,eventName, description, createdAt}) =>(
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{eventName}</h3>
        </Link>
        <p>{description}-{createdAt}</p>
    </div>
);


export default TodoListItem;