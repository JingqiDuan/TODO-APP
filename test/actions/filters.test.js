import {setStartDate, setEndDate, setTextFilter, sortByImportance,sortByDate} from '../../src/actions/filters';
import moment from 'moment';

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should generate set text filter',()=>{
    const action = setTextFilter('hello');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'hello'
    });
});

test('should generate set text filter object with default',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});

test('should generate action object for sort by amount',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});

test('should generate action object for sort by importance',()=>{
    expect(sortByImportance()).toEqual({type:'SORT_BY_IMPORTANCE'})
});