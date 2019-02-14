import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; //use browserRouter once to create new router and use Route for every single page 
import TodoDashboardPage from '../components/TodoDashboardPage.js';
import AddTodoPage from '../components/AddTodoPage.js'
import EditTodoPage from '../components/EditTodoPage.js'
import HelpPage from '../components/HelpPage.js'
import NotFoundPage from '../components/NotFoundPage.js'
import Header from '../components/Header.js'


const AppRouter = ()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={TodoDashboardPage} exact = {true}/>
        <Route path="/create" component={AddTodoPage}/>
        <Route path="/edit/:id" component={EditTodoPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;