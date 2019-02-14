import moment from  'moment';

export default [{
    id:'1',
    eventName:'testEvent1',
    description:'',
    importance:7,
    createdAt:0
},{
    id:'2',
    eventName:'testEvent2',
    description:'',
    importance:729,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'1',
    eventName:'testEvent3',
    description:'',
    importance:7729,
    createdAt:moment(0).add(4,'days').valueOf()
}];

 