import todosReducer from '../../src/reducers/todos';
import todos from '../fixtures/todos';

test('should set default state', ()=>{
    const state = todosReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove todo by id', ()=>{
    const action = {
        type: 'REMOVE_TODO',
        id:todos[1].id
    };
    const state = todosReducer(todos,action);
    expect(state).toEqual([todos[0],todos[2]]);
});

test('should not remove todo by id', ()=>{
    const action = {
        type: 'REMOVE_TODO',
        id:'-1'
    };
    const state = todosReducer(todos,action);
    expect(state).toEqual(todos);
});

test('should add a todo',()=>{
    const todo = {
        id:'109',
        eventName:'Fix Laptop',
        description:'',
        importance:7299,
        createdAt:2000
    };
    const action = {
        type:'ADD_TODO',
        todo
    };
    const state = todosReducer(todos,action);
    expect(state).toEqual([...todos,todo])
});

test('should edit a todo',()=>{
    const importance = 7999;
    const action = {
        type:'EDIT_TODO',
        id:todos[1].id,
        updates:{
            importance
        }
    };
    const state = todosReducer(todos,action);
    expect(state[1].importance).toBe(importance);
});

test('should not edit a todo if id not found',()=>{
    const importance = 7999;
    const action = {
        type:'EDIT_TODO',
        id:'-1',
        updates:{
            importance
        }
    };
    const state = todosReducer(todos,action);
    expect(state).toEqual(todos);
});