import React from 'react';
import {connect} from 'react-redux'; 
import TodoListItem from './TodoListItem';
import selectedTodos from '../selectors/todos';

export const TodoList = (props) => (
<div>
    <h1>Todo List</h1>
    {props.todos.map((todo)=>{
        
        return <TodoListItem key={todo.id}{...todo}/>; //using spread operator made properties of a Todo past into props
    })}
    
</div>
);


const mapStateToProps = (state)=>{
    return{
        todos: selectedTodos(state.todos,state.filters)
    };
};



export default connect(mapStateToProps)(TodoList);

