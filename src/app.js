import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {addTodo} from './actions/todos';
import {setTextFilter} from './actions/filters';
import getVisibleTodos from './selectors/todos';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addTodo({eventName:'pay water bill',description:'pay by december'}));
store.dispatch(addTodo({eventName:'play Pokemon Go',description:'just walk around'}));
store.dispatch(addTodo({eventName:'do react project',description:'do not wast time'}));



// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000)

const state = store.getState();
const VisibleTodos = getVisibleTodos(state.todos,state.filters);
console.log('this is state',state);


//console.log(store.getState());
const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>  
);

ReactDOM.render(jsx, document.getElementById('app'));
