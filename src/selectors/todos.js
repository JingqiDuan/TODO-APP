import moment from 'moment';

//Get visible todos

//second argument is the breakdown of the filter
export default (todos,{text, sortBy,startDate,endDate})=>{
    return todos.filter((todo)=>{
        const createdAtMoment = moment(todo.createdAt);
        const startDateMatch = startDate ?startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true;
        const textMatch = todo.eventName.toLowerCase().includes(text.toLowerCase())||
        todo.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt?1:-1;
        }else if(sortBy ==='importance'){
            return a.importance<b.importance?1:-1;
        }
        });
};