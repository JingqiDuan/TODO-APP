import uuid from 'uuid';

//add todos
export const addTodo=(
 {
     eventName='',
     description='',
     importance ='',
     createdAt=0
 } = {}
)=>({
    type: 'ADD_TODO',
    todo: {
        id:uuid(),
        eventName,
        description,
        importance,
        createdAt
    }
});

//remove todo
export const removeTodo = ({id} = {})=>({
    type: 'REMOVE_TODO',
    id
});

//EDIT_TODO
export const editTodo = (id,updates)=>({
    type: 'EDIT_TODO',
    id,
    updates
});