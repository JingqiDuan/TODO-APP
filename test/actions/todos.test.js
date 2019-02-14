import {addTodo, editTodo, removeTodo} from '../../src/actions/todos';

test('should setup remove todo action object', ()=>{
    const action = removeTodo({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_TODO',
        id:'123abc'
    });
});

test('should setup edit todo action object',()=>{
    const action = editTodo('123abc', {description: 'New description'});
    expect(action).toEqual({
        type:'EDIT_TODO',
        id: '123abc',
        updates:{
            description: 'New description'
        }
    });
});

test('should setup add todo action object', ()=>{
    const todoData = {
        eventName:'testTodo',
        description:'testDescription',
        importance:'5',
        createdAt:0
    };

    const action = addTodo(todoData);
    
    expect(action).toEqual({
        type:'ADD_TODO',
        todo:{
            ...todoData,
            id:expect.any(String)
        }
    });

});

test("should setup add todo action object with default values",()=>{
    const action = addTodo();
    expect(action).toEqual({
        type:'ADD_TODO',
        todo:{
            id:expect.any(String),
            description:'',
            importance:'',
            createdAt:0,
            eventName:''
        }
    });
});
