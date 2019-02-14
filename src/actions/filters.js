//SET_TEXT_FILTER
export const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
export const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//SORT_BY_IMPORTANCE
export const sortByImportance = () => ({
    type:'SORT_BY_IMPORTANCE'
});

//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
export const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate
});