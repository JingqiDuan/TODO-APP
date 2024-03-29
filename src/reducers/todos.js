//Todos Reducer

const todosReducerDefaultState = [];

const todosReducer = (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ];
        case 'REMOVE_TODO':
            return state.filter(({id})=>id !==action.id);
        case 'EDIT_TODO':
            return state.map((todo)=>{
                if(todo.id === action.id){
                    return{
                        ...todo,
                        ...action.updates
                    };
                }else{
                    return todo;
                };
            });
       default:
            return state;
    };
};

export default todosReducer;