import selectTodos from '../../src/selectors/todos';
import moment from 'moment';
import todos from '../fixtures/todos';


test('should filter by text value',()=>{
    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectTodos(todos,filters);
    expect(result).toEqual([todos[2],todos[0],todos[1]]);

});    


test('should filter by startdate',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectTodos(todos,filters);
    expect(result).toEqual([todos[2],todos[0]]);
});

test('should filter by end date',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const result = selectTodos(todos,filters);
    expect(result).toEqual([todos[0],todos[1]]);
});

test('should sort by date',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectTodos(todos,filters);
    expect(result).toEqual([todos[2],todos[0],todos[1]]);
});

test('should sort by importance',()=>{
    const filters = {
        text:'',
        sortBy:'importance',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectTodos(todos,filters);
    expect(result).toEqual([todos[2],todos[1],todos[0]]);
});