import filtersReducer from '../../src/reducers/filters';
import moment from 'moment';
import filters from '../../src/reducers/filters';

test('should setup default filters', ()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sortBy to importance',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_IMPORTANCE'});
    expect(state.sortBy).toBe('IMPORTANCE');
});

test('should set sortBy to date',()=>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'importance'
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('DATE');
});


test('should set text filter',()=>{
    const text = 'This is my filter';
    const action = {
        type:'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(state,action);
    expect(state.text).toBe(text);
});

test('should set startDate Filter',()=>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toBe(startDate);
});

test('should set endDate Filter',()=>{
    const endDate = moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toBe(endDate);
});