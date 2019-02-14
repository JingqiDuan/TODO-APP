import React from 'react';
import TodoList from './TodoList';
import TodoListFilters from './TodoListFilter';


const TodoDashboardPage = () =>(
    <div>
        <TodoListFilters/>
        <TodoList/>
    </div>
);

export default TodoDashboardPage;